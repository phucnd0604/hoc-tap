# UI: flashcards.html

Đổi giao diện thì chốt hướng bằng design system trước, rồi mới code.

## Design gate

1. Chạy skill `ui-ux-pro-max` với `--design-system` (hoặc gõ `/ui-ux-pro-max`) để lấy design system; không gọi script bằng đường dẫn máy.
2. Chốt token vào `:root` của `flashcards.html` (màu, font, bo góc, shadow, easing). Không dùng màu rời rạc ngoài token.
3. Giữ phong cách hiện tại: nền hồng/cam nhạt, card trắng bo 26, action nút tròn, gradient `#FD267A → #FF6036`.

## Checklist QA (bắt buộc trước khi bàn giao)

- [ ] 390px và ≥1280px: header không tràn, nhãn nút không bị cắt.
- [ ] Dropdown: chuột mở/đóng; ArrowDown mở; Esc đóng + trả focus; click ngoài đóng; Enter chọn.
- [ ] Kéo 260px: không scrollbar ngang (`scrollWidth <= innerWidth`).
- [ ] Lật 3D: mặt sau không lộ mirror; nội dung dài scroll bên trong mặt sau.
- [ ] Vuốt được **sau khi lật** (chuột và touch, kể cả khi bắt đầu kéo trên nội dung mặt sau); mặt sau vẫn cuộn dọc được.
- [ ] Focus ring rõ; `prefers-reduced-motion` tắt animation.
- [ ] Chạy `node check.mjs` — pass hết.

## Không làm

- Không sửa khối ANIMATION KIT khi chỉ thêm thẻ/môn.
- Không dùng emoji làm icon; icon SVG inline.
