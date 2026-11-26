// Dữ liệu thẻ của môn này. flashcards.html tự nạp file này khi chọn môn trong dropdown.
// Thêm thẻ: copy một object, đổi id (duy nhất trong môn), front, back.
// front/back nhận HTML đơn giản (<p>, <ul>, <li>, <strong>, <em>).
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["luat-ck"] = [
  {
    id: "cd1-s7-dieu-uoc-dieu-le",
    front: `<p class="q">Điều ước quốc tế mà Việt Nam ký kết và là thành viên có phải là VBQPPL không?</p>
<p class="q">Điều lệ của một doanh nghiệp có khi nào trở thành QPPL không?</p>`,
    back: `<p class="tag">1 · Điều ước quốc tế — KHÔNG phải VBQPPL</p>
<ul>
  <li>Không do cơ quan nhà nước ban hành theo đúng thẩm quyền, hình thức, trình tự của Luật BHVBQPPL 2025 (Điều 2) và không thuộc hệ thống VBQPPL tại Điều 4.</li>
  <li>Hình thành qua ký kết nhân danh Nhà nước hoặc Chính phủ với bên nước ngoài (khoản 1 Điều 2 Luật Điều ước quốc tế 2016).</li>
  <li>Vẫn là nguồn pháp luật, áp dụng ưu tiên: khác quy định của VBQPPL thì áp dụng điều ước, trừ Hiến pháp (khoản 1 Điều 6 Luật ĐƯQT 2016) — đúng thứ tự ưu tiên ở slide 13.</li>
</ul>
<p class="tag">2 · Điều lệ doanh nghiệp — KHÔNG (thông thường)</p>
<ul>
  <li>Là văn bản nội bộ do doanh nghiệp thông qua (Điều 24 Luật Doanh nghiệp 2020), chỉ ràng buộc thành viên/cổ đông/người quản lý → thiếu tính bắt buộc chung.</li>
  <li>Cơ quan nhà nước phê duyệt/chấp thuận điều lệ không làm nó thành QPPL (đó là quyết định cá biệt).</li>
  <li>Ngoại lệ: điều lệ mẫu do Nhà nước ban hành kèm VBQPPL — Phụ lục I Thông tư 116/2020/TT-BTC (Điều 3) → bộ phận của Thông tư, áp dụng chung cho mọi công ty đại chúng.</li>
</ul>
<p class="src">Nguồn: slide 7, 8, 13 · Luật BHVBQPPL 2025 (Điều 2, Điều 4) · Luật ĐƯQT 2016 (Điều 2, Điều 6) · Luật DN 2020 (Điều 24) · TT 116/2020/TT-BTC (Điều 3)</p>`
  },
  {
    id: "cd1-s9-loai-van-ban-vbqppl",
    front: `<p class="q">Loại văn bản nào KHÔNG phải là VBQPPL?</p>
<p class="q">Chỉ thị của Thủ tướng · Quyết định của Bộ trưởng · Quyết định của Tổng Kiểm toán nhà nước · Quyết định của Chủ tịch UBND cấp tỉnh · Quyết định của UBND cấp xã</p>`,
    back: `<p class="tag">1 · Ba loại KHÔNG phải VBQPPL</p>
<ul>
  <li><strong>Chỉ thị của Thủ tướng</strong> — chỉ Quyết định của Thủ tướng là VBQPPL (khoản 6 Điều 4).</li>
  <li><strong>Quyết định của Bộ trưởng</strong> — Bộ trưởng ban hành Thông tư (khoản 8 Điều 4); quyết định của Bộ trưởng là quyết định cá biệt.</li>
  <li><strong>Quyết định của Tổng Kiểm toán nhà nước</strong> — Tổng KTNN ban hành Thông tư (khoản 8 Điều 4).</li>
</ul>
<p class="tag">2 · LÀ VBQPPL (dễ nhầm)</p>
<ul>
  <li>Quyết định của Chủ tịch UBND cấp tỉnh — khoản 12 (điểm mới 2025).</li>
  <li>Quyết định của UBND cấp xã — khoản 15; Nghị quyết HĐND cấp xã — khoản 14 (xã, phường, đặc khu).</li>
  <li>Quyết định của Thủ tướng — khoản 6; Thông tư của Bộ trưởng — khoản 8.</li>
</ul>
<p class="src">Nguồn: slide 9 · Điều 2, 3, 4 Luật BHVBQPPL 2025 (VBHN 54/VBHN-VPQH 2025, sau Luật 87/2025/QH15)</p>`
  },
  {
    id: "cd1-s14-he-thong-phap-luat-ck",
    front: `<p class="q">Hệ thống pháp luật về chứng khoán và TTCK Việt Nam gồm những văn bản nào?</p>
<p class="q">a) Luật, Nghị định, Thông tư hướng dẫn/quy định về chứng khoán và TTCK<br>b) Luật, Nghị định, Thông tư và các quy chế nghiệp vụ hướng dẫn<br>c) Tất cả Luật, Nghị định, Thông tư do cơ quan nhà nước có thẩm quyền ban hành</p>`,
    back: `<p class="tag">Đáp án: a</p>
<ul>
  <li><strong>a đúng:</strong> hệ thống pháp luật CK & TTCK là các văn bản QPPL điều chỉnh lĩnh vực này — Luật Chứng khoán 2019, Nghị định 155/2020/NĐ-CP, Thông tư 116/2020/TT-BTC…</li>
  <li><strong>b sai:</strong> "quy chế nghiệp vụ" (SGDCK/VSDC, quy chế hướng dẫn) không phải VBQPPL, không thuộc hệ thống pháp luật; chỉ áp dụng khi pháp luật cho phép (slide 13).</li>
  <li><strong>c sai:</strong> "tất cả" Luật/NĐ/TT do cơ quan nhà nước ban hành là quá rộng — hệ thống pháp luật CK chỉ gồm văn bản điều chỉnh quan hệ CK & TTCK, không phải toàn bộ hệ thống pháp luật.</li>
</ul>
<p class="tag">Lưu ý (slide 12)</p>
<p>Hệ thống gồm 2 bộ phận: pháp luật chuyên ngành (Luật CK, NĐ, TT hướng dẫn) và pháp luật có liên quan (đầu tư, doanh nghiệp, kế toán, ngân hàng…).</p>
<p class="src">Nguồn: slide 12, 13, 14, 17 · Luật Chứng khoán 2019 · NĐ 155/2020/NĐ-CP · TT 116/2020/TT-BTC</p>`
  },
  {
    id: "cd1-s15-q1-chao-ban-ldn-lck",
    front: `<p class="q">Khi nào đợt chào bán cổ phiếu/cổ phần thuộc Luật Doanh nghiệp, khi nào thuộc Luật Chứng khoán?</p>`,
    back: `<p class="tag">Luật Chứng khoán điều chỉnh</p>
<ul>
  <li><strong>Chào bán ra công chúng</strong> (mọi tổ chức phát hành): qua phương tiện thông tin đại chúng; cho từ 100 nhà đầu tư trở lên không kể chuyên nghiệp; hoặc cho nhà đầu tư không xác định (khoản 19 Điều 4; Điều 14–19 LCK).</li>
  <li><strong>Chào bán riêng lẻ / cho cổ đông hiện hữu của công ty đại chúng, CTCK, CTQLQ</strong> — kể cả CTCK/CTQLQ chưa đại chúng (Điều 31 LCK; khoản 5 Điều 31 cho phát hành cho cổ đông hiện hữu).</li>
</ul>
<p class="tag">Luật Doanh nghiệp điều chỉnh</p>
<ul>
  <li>Chào bán <strong>riêng lẻ</strong> (hoặc cho cổ đông hiện hữu) của tổ chức phát hành <strong>không phải công ty đại chúng</strong> và không phải CTCK/CTQLQ → Điều 30 LCK dẫn chiếu LDN; LDN Điều 123, 125.</li>
  <li>LDN Điều 123 khoản 3: chào bán ra công chúng, chào bán của công ty đại chúng và tổ chức khác thực hiện theo pháp luật về chứng khoán.</li>
</ul>
<p class="tag">Mốc phân biệt</p>
<p>Ra công chúng → LCK. Riêng lẻ → xem tổ chức phát hành: đại chúng/CTCK/CTQLQ → LCK; còn lại → LDN. Công ty đại chúng vẫn theo LDN ở thủ tục nội bộ (ĐHĐCĐ…).</p>
<p class="src">Nguồn: slide 15 · LCK 2019 (Điều 4 khoản 19–20; Điều 14–16, 30, 31) · LDN 2020 (Điều 123–125)</p>`
  },
  {
    id: "cd1-s15-q2-ubcknn-vbqppl",
    front: `<p class="q">UBCKNN có thẩm quyền xây dựng và ban hành VBQPPL không? Tại sao?</p>`,
    back: `<p class="tag">Không</p>
<ul>
  <li>UBCKNN là cơ quan thuộc Bộ Tài chính (khoản 1 Điều 9 LCK), không thuộc chủ thể ban hành VBQPPL tại Điều 4 Luật BHVBQPPL 2025.</li>
  <li>Nhiệm vụ: <strong>trình Bộ trưởng Bộ Tài chính</strong> ban hành hoặc để trình cấp có thẩm quyền ban hành VBQPPL về CK & TTCK (điểm a khoản 1 Điều 9 LCK).</li>
  <li>UBCKNN chỉ ban hành văn bản cá biệt (quyết định cấp phép, xử lý vi phạm…) và quy chế nội bộ — không phải VBQPPL.</li>
</ul>
<p class="tag">Hệ quả</p>
<p>Muốn ban hành quy phạm mới: Bộ Tài chính → Thông tư; Chính phủ → Nghị định; Quốc hội → Luật.</p>
<p class="src">Nguồn: slide 15 · LCK 2019 (Điều 9) · Luật BHVBQPPL 2025 (Điều 4)</p>`
  },
  {
    id: "cd1-s15-q3-ldn-ctck",
    front: `<p class="q">CTCK, CTQLQĐTCK chịu sự điều chỉnh của Luật Doanh nghiệp như thế nào? Cho ví dụ.</p>`,
    back: `<p class="tag">LDN điều chỉnh (tư cách doanh nghiệp)</p>
<ul>
  <li>Thành lập, điều lệ, cơ cấu tổ chức (ĐHĐCĐ, HĐQT, BKS/UBKT), quyền và nghĩa vụ cổ đông.</li>
  <li>Tăng/giảm vốn, chào bán cổ phần (Điều 123–125), mua lại cổ phần, hợp nhất/sáp nhập, giải thể.</li>
</ul>
<p class="tag">LCK điều chỉnh (chuyên ngành)</p>
<ul>
  <li>Giấy phép thành lập và hoạt động, vốn pháp định, nghiệp vụ, nhân sự có chứng chỉ, giới hạn đầu tư, báo cáo, quản trị công ty đại chúng.</li>
</ul>
<p class="tag">Ví dụ</p>
<ul>
  <li>CTCK (CTCP) phát hành cho cổ đông hiện hữu: thủ tục ĐHĐCĐ theo LDN (Điều 124); điều kiện chào bán theo LCK — kể cả khi chưa đại chúng (khoản 5 Điều 31).</li>
  <li>Sáp nhập CTCK: trình tự theo LDN + phải được UBCKNN chấp thuận theo LCK.</li>
  <li>CTCK/CTQLQ là CTCP hoặc TNHH: LDN quy định loại hình, điều lệ; LCK Điều 74 quy định điều kiện cổ đông/thành viên góp vốn.</li>
</ul>
<p class="src">Nguồn: slide 15 · LDN 2020 (Điều 123–125) · LCK 2019 (Điều 9, 31, 74)</p>`
  },
  {
    id: "cd1-s16-van-de-moi-lien-bo",
    front: `<p class="q">Vấn đề mới phát sinh trên TTCK cần quy định nhưng liên quan đến nhiệm vụ, quyền hạn, phạm vi quản lý nhà nước của từ hai Bộ trở lên — ban hành loại VBQPPL nào?</p>`,
    back: `<p class="tag">Đáp án: Thông tư liên tịch</p>
<ul>
  <li>Ban hành giữa các Bộ trưởng, Thủ trưởng cơ quan ngang Bộ có liên quan (khoản 9 Điều 4 Luật BHVBQPPL 2025).</li>
  <li>Dùng khi nội dung quy định liên quan đến chức năng, nhiệm vụ, quyền hạn, phạm vi quản lý của từ hai cơ quan trở lên → bảo đảm thống nhất, tránh chồng chéo.</li>
</ul>
<p class="tag">Lưu ý</p>
<ul>
  <li>Nếu vấn đề vượt thẩm quyền của các Bộ (đặt ra quyền, nghĩa vụ mới hoặc chính sách mới) → trình Chính phủ ban hành Nghị định; cao hơn là Luật/Nghị quyết của Quốc hội.</li>
  <li>Thông tư liên tịch không thay thế Nghị định khi cần quy định vượt phạm vi thẩm quyền cấp Bộ.</li>
</ul>
<p class="src">Nguồn: slide 16 · Luật BHVBQPPL 2025 (khoản 9 Điều 4; Điều 2, 3)</p>`
  }
];
