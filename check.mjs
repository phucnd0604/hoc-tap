#!/usr/bin/env node
// check.mjs - harness kiểm tra flashcards.html bằng Chrome headless (CDP, không cần dependency).
// Dùng: node check.mjs [--root <dir>] [--shots <dir>] [--quiet]
// Exit 0 = tất cả pass; 1 = có check fail hoặc lỗi khởi động.
import { createServer } from 'node:http';
import { readFile, writeFile, mkdtemp, rm, stat, mkdir } from 'node:fs/promises';
import { existsSync, readdirSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { join, extname, resolve, dirname } from 'node:path';
import { tmpdir, homedir } from 'node:os';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);
function arg(name, def) {
  const i = argv.indexOf('--' + name);
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : def;
}
const ROOT = resolve(arg('root', HERE));
const SHOTS = resolve(arg('shots', join(ROOT, '.scratch', 'check')));
const QUIET = argv.includes('--quiet');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => { if (!QUIET) console.log(...a); };

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

// ---------- static server ----------
const server = createServer(async (req, res) => {
  try {
    const u = new URL(req.url, 'http://localhost');
    let p = decodeURIComponent(u.pathname);
    if (p === '/') p = '/flashcards.html';
    const file = resolve(join(ROOT, p));
    if (!file.startsWith(ROOT)) throw new Error('outside root');
    const st = await stat(file);
    if (!st.isFile()) throw new Error('not a file');
    res.writeHead(200, { 'content-type': MIME[extname(file).toLowerCase()] || 'application/octet-stream', 'cache-control': 'no-store' });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    res.end('not found');
  }
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const PORT = server.address().port;
const ORIGIN = 'http://127.0.0.1:' + PORT;
log('server ' + ORIGIN + ' -> ' + ROOT);

// ---------- chrome ----------
function findChrome() {
  const home = homedir();
  const cands = [
    process.env.CHROME_PATH,
    // Windows
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    process.env.LOCALAPPDATA ? join(process.env.LOCALAPPDATA, 'Google/Chrome/Application/chrome.exe') : null,
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    // macOS
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    // Linux
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/usr/bin/microsoft-edge',
  ].filter(Boolean);
  for (const c of cands) if (existsSync(c)) return c;
  const pwRoots = [
    process.env.LOCALAPPDATA ? join(process.env.LOCALAPPDATA, 'ms-playwright') : null,
    join(home, '.cache', 'ms-playwright'),
    join(home, 'Library', 'Caches', 'ms-playwright'),
  ].filter(Boolean);
  for (const root of pwRoots) {
    if (!existsSync(root)) continue;
    for (const d of readdirSync(root)) {
      if (!d.startsWith('chromium-')) continue;
      for (const rel of ['chrome-win/chrome.exe', 'chrome-win64/chrome.exe', 'chrome-linux/chrome', 'chrome-linux64/chrome', 'chrome-mac/Chromium.app/Contents/MacOS/Chromium', 'chrome-mac-arm64/Chromium.app/Contents/MacOS/Chromium']) {
        const p = join(root, d, rel);
        if (existsSync(p)) return p;
      }
    }
  }
  throw new Error('Không tìm thấy Chrome/Edge. Đặt CHROME_PATH hoặc cài Chrome.');
}

const chromePath = findChrome();
const profile = await mkdtemp(join(tmpdir(), 'fc-check-'));
const child = spawn(chromePath, [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--disable-extensions', '--disable-background-networking',
  '--remote-debugging-port=0', '--user-data-dir=' + profile, 'about:blank',
], { stdio: 'ignore', windowsHide: true });

let devtools = null;
for (let i = 0; i < 150; i++) {
  try {
    const txt = await readFile(join(profile, 'DevToolsActivePort'), 'utf8');
    if (txt.includes('\n')) { devtools = txt.trim().split(/\r?\n/); break; }
  } catch {}
  await sleep(100);
}
if (!devtools) {
  child.kill();
  server.close();
  throw new Error('Chrome không mở DevToolsActivePort (khởi động thất bại)');
}
const DEBUG_PORT = devtools[0];

// ---------- tiny CDP client ----------
class Cdp {
  constructor(url) {
    this.ws = new WebSocket(url);
    this.next = 0;
    this.pending = new Map();
    this.listeners = new Map();
    this.ready = new Promise((resolve, reject) => {
      this.ws.addEventListener('open', () => resolve());
      this.ws.addEventListener('error', () => reject(new Error('WebSocket lỗi')));
    });
    this.ws.addEventListener('message', (ev) => {
      const msg = JSON.parse(typeof ev.data === 'string' ? ev.data : ev.data.toString());
      if (msg.id && this.pending.has(msg.id)) {
        const p = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) p.reject(new Error(msg.error.message)); else p.resolve(msg.result);
      } else if (msg.method) {
        for (const fn of this.listeners.get(msg.method) || []) fn(msg.params);
      }
    });
  }
  async send(method, params) {
    await this.ready;
    const id = ++this.next;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params: params || {} }));
    });
  }
  on(method, fn) {
    if (!this.listeners.has(method)) this.listeners.set(method, []);
    this.listeners.get(method).push(fn);
  }
  async waitEvent(method, timeout) {
    return new Promise((resolve, reject) => {
      const t = setTimeout(() => reject(new Error('timeout chờ ' + method)), timeout || 15000);
      this.on(method, (params) => { clearTimeout(t); resolve(params); });
    });
  }
  close() { try { this.ws.close(); } catch {} }
}

const target = await (await fetch('http://127.0.0.1:' + DEBUG_PORT + '/json/new?' + encodeURIComponent('about:blank'), { method: 'PUT' })).json();
const cdp = new Cdp(target.webSocketDebuggerUrl);
await cdp.send('Page.enable');
await cdp.send('Runtime.enable');

async function evalExpr(expression) {
  const res = await cdp.send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true, userGesture: true });
  if (res.exceptionDetails) throw new Error(res.exceptionDetails.text || 'exception in page');
  return res.result.value;
}

const loaded = cdp.waitEvent('Page.loadEventFired', 25000);
await cdp.send('Page.navigate', { url: ORIGIN + '/flashcards.html' });
await loaded;
await sleep(1200);

// ---------- suite chạy trong trang ----------
async function pageSuite() {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const results = [];
  const ok = (name, pass, detail) => results.push({ name, pass: !!pass, detail: detail === undefined ? '' : String(detail) });
  const pe = (el, type, x, y) => el.dispatchEvent(new PointerEvent(type, {
    bubbles: true, cancelable: true, clientX: x, clientY: y, pointerId: 1, pointerType: 'touch', isPrimary: true,
  }));

  try {
    for (let i = 0; i < 60 && !(typeof state !== 'undefined' && state.deck.length); i++) await wait(100);
    ok('subject loaded', typeof state !== 'undefined' && !!state.id && state.deck.length > 0, typeof state === 'undefined' ? 'không có state' : state.id);
    if (typeof state === 'undefined' || !state.deck.length) return { results };

    const meta = (typeof SUBJECTS !== 'undefined' ? SUBJECTS : []).filter((s) => s.id === state.id)[0];
    ok('subject name shown', !!meta && document.getElementById('subjectName').textContent === meta.name);

    const card = document.getElementById('card');
    document.getElementById('flip').click();
    await wait(80);
    ok('flip shows back', card.classList.contains('flipped'));
    document.getElementById('flip').click();
    await wait(80);
    ok('flip returns front', !card.classList.contains('flipped'));

    const key = 'fc:' + state.id + ':progress:v1';
    const c0 = state.deck[state.idx];
    document.getElementById('mark').click();
    await wait(80);
    ok('mark stores progress', (localStorage.getItem(key) || '').includes(c0.id));
    document.getElementById('mark').click();
    await wait(80);
    ok('unmark clears progress', !(localStorage.getItem(key) || '').includes(c0.id));

    const swipe = document.getElementById('swipe');
    const r = swipe.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    pe(swipe, 'pointerdown', cx, cy);
    pe(swipe, 'pointermove', cx + 260, cy);
    ok('drag no horizontal overflow', document.documentElement.scrollWidth <= window.innerWidth,
      document.documentElement.scrollWidth + ' vs ' + window.innerWidth);
    ok('drag applies transform', /translateX/.test(swipe.style.transform), swipe.style.transform);
    pe(swipe, 'pointerup', cx + 260, cy);
    await wait(400);

    state.deck.push({ id: '__check__', front: '<p class="q">check</p>', back: '<p>check</p>' });
    state.idx = 0;
    state.flipped = false;
    render(true);
    pe(swipe, 'pointerdown', cx, cy);
    for (let i = 1; i <= 6; i++) { pe(swipe, 'pointermove', cx + i * 30, cy); await wait(16); }
    pe(swipe, 'pointerup', cx + 180, cy);
    let moved = false;
    for (let i = 0; i < 40; i++) { if (state.idx === 1) { moved = true; break; } await wait(100); }
    ok('swipe right advances', moved, 'idx=' + state.idx);
    state.deck.pop();
    state.idx = 0;
    state.flipped = false;
    render(true);

    // regression: lật thẻ rồi vẫn phải vuốt được
    state.deck.push({ id: '__check2__', front: '<p class="q">f</p>', back: '<p>b</p>' });
    state.idx = 0;
    render(true);
    for (let i = 0; i < 30 && state.busy; i++) await wait(100);
    document.getElementById('flip').click();
    await wait(700);
    ok('flip before swipe shows back', card.classList.contains('flipped'));
    pe(swipe, 'pointerdown', cx, cy);
    for (let i = 1; i <= 6; i++) { pe(swipe, 'pointermove', cx + i * 30, cy); await wait(16); }
    pe(swipe, 'pointerup', cx + 180, cy);
    let movedAfterFlip = false;
    for (let i = 0; i < 40; i++) { if (state.idx === 1) { movedAfterFlip = true; break; } await wait(100); }
    ok('swipe works after flip', movedAfterFlip, 'idx=' + state.idx);
    state.deck.pop();
    state.idx = 0;
    state.flipped = false;
    render(true);

    const wrap = document.getElementById('subjectWrap');
    const btn = document.getElementById('subjectBtn');
    btn.click();
    await wait(250);
    ok('dropdown opens', wrap.classList.contains('open') && btn.getAttribute('aria-expanded') === 'true');
    const focused = document.activeElement;
    ok('dropdown focuses option', !!focused && focused.classList.contains('subject-option'));
    if (focused && focused.classList.contains('subject-option')) focused.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await wait(250);
    ok('Esc closes and restores focus', !wrap.classList.contains('open') && document.activeElement === btn);

    btn.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    await wait(250);
    ok('ArrowDown opens dropdown', wrap.classList.contains('open'));
    document.body.click();
    await wait(250);
    ok('outside click closes dropdown', !wrap.classList.contains('open'));
  } catch (err) {
    results.push({ name: 'suite crashed', pass: false, detail: String((err && err.stack) || err) });
  }
  return { results: results, deck: (typeof state !== 'undefined' ? state.deck.length : -1) };
}

let failed = 0;
try {
  const suite = await evalExpr('(' + pageSuite.toString() + ')()');
  for (const r of suite.results) {
    log((r.pass ? '  [PASS] ' : '  [FAIL] ') + r.name + (r.detail ? ' - ' + r.detail : ''));
    if (!r.pass) failed++;
  }

  // real mouse input: flip trước, rồi kéo bằng chuột thật (hit-test như user)
  try {
    await evalExpr('(function(){ state.deck.push({id:"__mouse__",front:"<p>m</p>",back:"<p>m</p>"}); state.idx = 0; state.flipped = false; render(true); document.getElementById("flip").click(); return true; })()');
    await sleep(700);
    const rect = await evalExpr('(function(){ var r = document.getElementById("swipe").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, flipped: document.getElementById("card").classList.contains("flipped") }; })()');
    async function mouse(type, x, y, buttons) {
      await cdp.send('Input.dispatchMouseEvent', { type, x, y, button: 'left', buttons, clickCount: 1 });
    }
    await mouse('mousePressed', rect.x, rect.y, 1);
    for (let i = 1; i <= 6; i++) { await mouse('mouseMoved', rect.x + i * 30, rect.y, 1); await sleep(20); }
    await mouse('mouseReleased', rect.x + 180, rect.y, 0);
    await sleep(900);
    const idx = await evalExpr('state.idx');
    const pass = !!rect.flipped && idx === 1;
    log((pass ? '  [PASS] ' : '  [FAIL] ') + 'mouse swipe after flip - flipped=' + rect.flipped + ' idx=' + idx);
    if (!pass) failed++;
    await evalExpr('(function(){ state.deck.pop(); state.idx = 0; state.flipped = false; render(true); return true; })()');
  } catch (err) {
    failed++;
    console.error('  [FAIL] mouse check: ' + (err && err.message ? err.message : err));
  }

  // touch input: flip rồi vuốt bằng touch thật
  try {
    await cdp.send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 1 });
    await evalExpr('(function(){ window.__ev = []; ["pointerdown","pointermove","pointercancel","pointerup"].forEach(function(t){ document.getElementById("swipe").addEventListener(t, function(e){ window.__ev.push(t + ":" + e.pointerType + ":" + (e.target.tagName || "")); }, true); }); state.deck.push({id:"__touch__",front:"<p>t</p>",back:"<p>t</p>"}); state.idx = 0; state.flipped = false; render(true); document.getElementById("flip").click(); return true; })()');
    await sleep(700);
    const trect = await evalExpr('(function(){ var r = document.getElementById("swipe").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, flipped: document.getElementById("card").classList.contains("flipped") }; })()');
    async function touch(type, x, y) {
      await cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x, y, id: 1, radiusX: 2, radiusY: 2, force: 1 }] });
    }
    await touch('touchStart', trect.x, trect.y);
    for (let i = 1; i <= 6; i++) { await touch('touchMove', trect.x + i * 30, trect.y); await sleep(20); }
    await touch('touchEnd', trect.x + 180, trect.y);
    await sleep(900);
    const tidx = await evalExpr('state.idx');
    const ev = await evalExpr('window.__ev');
    const pass = !!trect.flipped && tidx === 1;
    log((pass ? '  [PASS] ' : '  [FAIL] ') + 'touch swipe after flip - flipped=' + trect.flipped + ' idx=' + tidx);
    log('    events: ' + JSON.stringify(ev));
    if (!pass) failed++;
    await evalExpr('(function(){ state.deck.pop(); state.idx = 0; state.flipped = false; render(true); return true; })()');
  } catch (err) {
    failed++;
    console.error('  [FAIL] touch check: ' + (err && err.message ? err.message : err));
  }

  // scroll dọc trên mặt sau vẫn phải hoạt động sau khi thêm touch-action: pan-y
  try {
    await evalExpr('(function(){ state.flipped = false; render(true); document.getElementById("flip").click(); return true; })()');
    await sleep(750);
    const srect = await evalExpr('(function(){ var r = document.getElementById("swipe").getBoundingClientRect(); var f = document.getElementById("back"); return { x: r.left + r.width / 2, y: r.top + r.height / 2, overflow: f.scrollHeight > f.clientHeight + 4 }; })()');
    async function ts(type, x, y) {
      await cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x, y, id: 1, radiusX: 2, radiusY: 2, force: 1 }] });
    }
    await ts('touchStart', srect.x, srect.y);
    for (let i = 1; i <= 8; i++) { await ts('touchMove', srect.x, srect.y - i * 25); await sleep(20); }
    await ts('touchEnd', srect.x, srect.y - 200);
    await sleep(600);
    const scrolled = await evalExpr('document.getElementById("back").scrollTop');
    const pass = !!srect.overflow && scrolled > 0;
    log((pass ? '  [PASS] ' : '  [FAIL] ') + 'touch scrolls back face - overflow=' + srect.overflow + ' scrollTop=' + scrolled);
    if (!pass) failed++;
    await evalExpr('(function(){ state.flipped = false; render(true); return true; })()');
  } catch (err) {
    failed++;
    console.error('  [FAIL] scroll check: ' + (err && err.message ? err.message : err));
  }

  await mkdir(SHOTS, { recursive: true });
  async function shot(name) {
    const res = await cdp.send('Page.captureScreenshot', { format: 'png' });
    await writeFile(join(SHOTS, name), Buffer.from(res.data, 'base64'));
    log('  [shot] ' + name);
  }
  await shot('01-front.png');
  await evalExpr('(function(){ document.getElementById("flip").click(); return true; })()');
  await sleep(700);
  await shot('02-back.png');
  await evalExpr('(function(){ document.getElementById("flip").click(); document.getElementById("subjectBtn").click(); return true; })()');
  await sleep(400);
  await shot('03-subjects.png');
} catch (err) {
  failed++;
  console.error('  [FAIL] harness: ' + (err && err.message ? err.message : err));
}

cdp.close();
child.kill();
server.close();
await sleep(300);
await rm(profile, { recursive: true, force: true }).catch(() => {});
log(failed ? 'KẾT QUẢ: ' + failed + ' check fail' : 'KẾT QUẢ: tất cả pass');
process.exit(failed ? 1 : 0);
