# Hoc-tap

## Flashcards app

- `flashcards.html` — app duy nhất (UI + ANIMATION KIT). `subjects.js` — registry dropdown. `<môn>/cards.js` — dữ liệu thẻ, `id` phải trùng `subjects.js`.
- Nội dung thẻ (`front`/`back`): viết đầy đủ thuật ngữ, **không viết tắt** trong câu hỏi/giải thích (trừ số hiệu văn bản như NĐ-CP, TT-BTC); mỗi thẻ kèm căn cứ (slide + điều/khoản).
- Tiến độ theo môn: `fc:<id>:progress:v1`; môn đang chọn: `fc:last-subject`.
- Thêm môn: copy `LUT/cards.js`, đổi key, thêm một dòng vào `subjects.js`.
- Kiểm tra: `node check.mjs` (Chrome headless, exit 1 khi fail).
- Đổi UI: `docs/agents/ui.md` · nguồn luật: `docs/agents/legal-sources.md` · quirk tool: `docs/agents/tooling.md`.

## Scratch

- Mọi file tạm, log, ảnh, ghi chú agent tạo khi làm việc → `.scratch/` (đã gitignore; không commit, không deploy).
- Không để file rác ở root; `check.mjs` ghi ảnh vào `.scratch/check/`.

## Agent skills

### Issue tracker

Issues live as local markdown files under `.scratch/<feature>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five-role vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: root `GLOSSARY.md` + `docs/adr/`. See `docs/agents/domain.md`.
