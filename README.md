# Học-tap — Flashcards Luật Chứng khoán & TTCK

Bộ thẻ ghi nhớ (vuốt/lật) để ôn môn Luật Chứng khoán và thị trường chứng khoán.

**Live:** https://hoc-tap-five.vercel.app/

## Tính năng

- Vuốt phải/sang trái để chuyển thẻ, chạm để lật 3D; có nút bấm và phím mũi tên cho bàn phím.
- Dropdown chọn môn; thêm môn mới bằng cách thêm folder dữ liệu.
- Đánh dấu “đã thuộc”; tiến độ lưu trong localStorage của từng trình duyệt (không đồng bộ giữa thiết bị).

## Cấu trúc

- `flashcards.html` — app duy nhất (UI + animation kit dùng chung).
- `subjects.js` — danh sách môn cho dropdown.
- `<môn>/cards.js` — dữ liệu thẻ của môn (ví dụ `LUT/cards.js`).
- `check.mjs` — harness kiểm tra bằng Chrome headless.

## Thêm môn mới

1. Copy `LUT/cards.js` sang folder mới, đổi key `window.SUBJECT_DATA["luat-ck"]` thành id mới.
2. Thêm một dòng vào `subjects.js`:

   ```js
   { id: "id-moi", name: "Tên môn", src: "folder-moi/cards.js" }
   ```

3. Mở `flashcards.html` và chọn môn trong dropdown.

## Chạy và kiểm tra

- Mở trực tiếp `flashcards.html` bằng trình duyệt, hoặc serve tĩnh bằng `python -m http.server`.
- Kiểm tra tự động: `node check.mjs` (cần Chrome/Edge; exit 1 khi có check fail).

## Deploy

Vercel import repo này, framework **Other**, không build; mỗi lần push lên `main` là deploy lại. `vercel.json` rewrite `/` về `/flashcards.html`; `.vercelignore` loại tài liệu và PPT khỏi bản deploy.
