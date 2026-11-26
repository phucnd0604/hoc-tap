# Tooling quirks (DSH trên Windows)

## Playwright MCP

- `file://` bị chặn ("Access to file: protocol is blocked") → phục vụ qua HTTP. `check.mjs` tự dựng server, không cần làm tay.
- Đóng tab theo index dễ lỗi "Tab N not found" vì index xê dịch sau mỗi lần mở/đóng; lấy danh sách tab hiện tại trước khi close.
- Test tương tác một lần rồi đóng tab: dùng `node check.mjs`, không dựng script Playwright tạm mỗi lần.

## vision_html_screenshot

- Trả **chuỗi JSON** (`{"path":...}`), không phải object → `JSON.parse` trước khi dùng `.path`, nếu không `read_image` báo "lossless JSON".
- Dùng để kiểm tra tĩnh trang `file://` (JS vẫn chạy).

## web_search

- Hiện lỗi `TypeError: fetch failed` tới `api.deepseek.com/v1/tools/search` → đừng thử lại; dùng `web_fetch` + html.duckduckgo.com.
- Sửa hẳn: trỏ `web-deepseek-api.searchBaseURL` / `searchApiKeyEnv` sang endpoint hoạt động (việc của user).

## run_code

- Viết file chứa backtick bằng `String.raw` sẽ vỡ chuỗi; dùng placeholder (vd `%%BT%%`) rồi replace, hoặc tránh template literal trong nội dung.

## Session log

- Log là zstd đa frame; đọc bằng `session-read.mjs` (nằm trong thư mục cấu hình DSH, cạnh `AGENTS.md`): `node session-read.mjs <path> --summary`.
