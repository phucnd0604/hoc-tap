# Nguồn pháp lý Việt Nam

## Truy cập

| Nguồn | Trạng thái | Cách đọc |
|---|---|---|
| thuvienphapluat.vn | Cloudflare 403 với web_fetch | Mở bằng browser thật (Playwright/Chrome tab), chờ 5–8s, đọc `document.body.innerText` |
| vbpl.vn | Trả payload Next.js, không có text thô | Mở bằng browser, không dùng web_fetch |
| vanban.chinhphu.vn | Chỉ metadata, không có toàn văn | Xác nhận số hiệu/ngày ban hành |
| datafiles.chinhphu.vn | PDF gốc ký số | Tải khi cần bản gốc |
| html.duckduckgo.com | Tìm nhanh, ổn định | `web_fetch https://html.duckduckgo.com/html/?q=...` |
| Bing | Kết quả lẫn tiếng Nhật/Trung | Tránh |

## Quy ước

- Ưu tiên văn bản hợp nhất (VBHN) khi có; ghi rõ số hiệu + Điều/khoản.
- Kiểm tra ngày hiệu lực trước khi trích; không dựa trí nhớ.
- Điều ước quốc tế: Luật Điều ước quốc tế 2016 (Điều 2 định nghĩa, Điều 6 hiệu lực so với VBQPPL).

## Mẫu đọc TTVPL

1. Mở tab TTVPL, chờ tiêu đề khác "Just a moment...".
2. `document.body.innerText`, tìm "Điều X." để lấy nguyên văn.
