// Dữ liệu thẻ của môn này. flashcards.html tự nạp file này khi chọn môn trong dropdown.
// Thêm thẻ: copy một object, đổi id (duy nhất trong môn), front, back.
// front/back nhận HTML đơn giản (<p>, <ul>, <li>, <strong>, <em>).
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["luat-ck"] = [
  {
    id: "cd1-s7-dieu-uoc-dieu-le",
    front: `<p class="q">Điều ước quốc tế mà Việt Nam ký kết và là thành viên có phải là văn bản quy phạm pháp luật không?</p>
<p class="q">Điều lệ của một doanh nghiệp có khi nào trở thành quy phạm pháp luật không?</p>`,
    back: `<p class="tag">1 · Điều ước quốc tế — KHÔNG phải văn bản quy phạm pháp luật</p>
<ul>
  <li>Không do cơ quan nhà nước ban hành theo đúng thẩm quyền, hình thức, trình tự của Luật Ban hành văn bản quy phạm pháp luật 2025 (Điều 2) và không thuộc hệ thống văn bản quy phạm pháp luật tại Điều 4.</li>
  <li>Hình thành qua ký kết nhân danh Nhà nước hoặc Chính phủ với bên nước ngoài (khoản 1 Điều 2 Luật Điều ước quốc tế 2016).</li>
  <li>Vẫn là nguồn pháp luật, áp dụng ưu tiên: khác quy định của văn bản quy phạm pháp luật thì áp dụng điều ước, trừ Hiến pháp (khoản 1 Điều 6 Luật ĐƯQT 2016) — đúng thứ tự ưu tiên ở slide 13.</li>
</ul>
<p class="tag">2 · Điều lệ doanh nghiệp — KHÔNG (thông thường)</p>
<ul>
  <li>Là văn bản nội bộ do doanh nghiệp thông qua (Điều 24 Luật Doanh nghiệp 2020), chỉ ràng buộc thành viên/cổ đông/người quản lý → thiếu tính bắt buộc chung.</li>
  <li>Cơ quan nhà nước phê duyệt/chấp thuận điều lệ không làm nó thành quy phạm pháp luật (đó là quyết định cá biệt).</li>
  <li>Ngoại lệ: điều lệ mẫu do Nhà nước ban hành kèm văn bản quy phạm pháp luật — Phụ lục I Thông tư 116/2020/TT-BTC (Điều 3) → bộ phận của Thông tư, áp dụng chung cho mọi công ty đại chúng.</li>
</ul>
<p class="src">Nguồn: slide 7, 8, 13 · Luật Ban hành văn bản quy phạm pháp luật 2025 (Điều 2, Điều 4) · Luật ĐƯQT 2016 (Điều 2, Điều 6) · Luật DN 2020 (Điều 24) · Thông tư 116/2020/TT-BTC (Điều 3)</p>`
  },
  {
    id: "cd1-s9-loai-van-ban-vbqppl",
    front: `<p class="q">Loại văn bản nào KHÔNG phải là văn bản quy phạm pháp luật?</p>
<p class="q">Chỉ thị của Thủ tướng · Quyết định của Bộ trưởng · Quyết định của Tổng Kiểm toán nhà nước · Quyết định của Chủ tịch Ủy ban nhân dân cấp tỉnh · Quyết định của Ủy ban nhân dân cấp xã</p>`,
    back: `<p class="tag">1 · Ba loại KHÔNG phải văn bản quy phạm pháp luật</p>
<ul>
  <li><strong>Chỉ thị của Thủ tướng</strong> — chỉ Quyết định của Thủ tướng là văn bản quy phạm pháp luật (khoản 6 Điều 4).</li>
  <li><strong>Quyết định của Bộ trưởng</strong> — Bộ trưởng ban hành Thông tư (khoản 8 Điều 4); quyết định của Bộ trưởng là quyết định cá biệt.</li>
  <li><strong>Quyết định của Tổng Kiểm toán nhà nước</strong> — Tổng Kiểm toán nhà nước ban hành Thông tư (khoản 8 Điều 4).</li>
</ul>
<p class="tag">2 · LÀ văn bản quy phạm pháp luật (dễ nhầm)</p>
<ul>
  <li>Quyết định của Chủ tịch Ủy ban nhân dân cấp tỉnh — khoản 12 (điểm mới 2025).</li>
  <li>Quyết định của Ủy ban nhân dân cấp xã — khoản 15; Nghị quyết Hội đồng nhân dân cấp xã — khoản 14 (xã, phường, đặc khu).</li>
  <li>Quyết định của Thủ tướng — khoản 6; Thông tư của Bộ trưởng — khoản 8.</li>
</ul>
<p class="src">Nguồn: slide 9 · Điều 2, 3, 4 Luật Ban hành văn bản quy phạm pháp luật 2025 (VBHN 54/VBHN-VPQH 2025, sau Luật 87/2025/QH15)</p>`
  },
  {
    id: "cd1-s14-he-thong-phap-luat-ck",
    front: `<p class="q">Hệ thống pháp luật về chứng khoán và thị trường chứng khoán Việt Nam gồm những văn bản nào?</p>
<p class="q">a) Luật, Nghị định, Thông tư hướng dẫn/quy định về chứng khoán và thị trường chứng khoán<br>b) Luật, Nghị định, Thông tư và các quy chế nghiệp vụ hướng dẫn<br>c) Tất cả Luật, Nghị định, Thông tư do cơ quan nhà nước có thẩm quyền ban hành</p>`,
    back: `<p class="tag">Đáp án: a</p>
<ul>
  <li><strong>a đúng:</strong> hệ thống pháp luật chứng khoán & thị trường chứng khoán là các văn bản quy phạm pháp luật điều chỉnh lĩnh vực này — Luật Chứng khoán 2019, Nghị định 155/2020/NĐ-CP, Thông tư 116/2020/TT-BTC…</li>
  <li><strong>b sai:</strong> "quy chế nghiệp vụ" (Sở giao dịch chứng khoán/Tổng công ty lưu ký và bù trừ chứng khoán Việt Nam, quy chế hướng dẫn) không phải văn bản quy phạm pháp luật, không thuộc hệ thống pháp luật; chỉ áp dụng khi pháp luật cho phép (slide 13).</li>
  <li><strong>c sai:</strong> "tất cả" Luật/Nghị định/Thông tư do cơ quan nhà nước ban hành là quá rộng — hệ thống pháp luật chứng khoán chỉ gồm văn bản điều chỉnh quan hệ chứng khoán & thị trường chứng khoán, không phải toàn bộ hệ thống pháp luật.</li>
</ul>
<p class="tag">Lưu ý (slide 12)</p>
<p>Hệ thống gồm 2 bộ phận: pháp luật chuyên ngành (Luật Chứng khoán, Nghị định, Thông tư hướng dẫn) và pháp luật có liên quan (đầu tư, doanh nghiệp, kế toán, ngân hàng…).</p>
<p class="src">Nguồn: slide 12, 13, 14, 17 · Luật Chứng khoán 2019 · Nghị định 155/2020/NĐ-CP · Thông tư 116/2020/TT-BTC</p>`
  },
  {
    id: "cd1-s15-q1-chao-ban-ldn-lck",
    front: `<p class="q">Khi nào đợt chào bán cổ phiếu/cổ phần thuộc Luật Doanh nghiệp, khi nào thuộc Luật Chứng khoán?</p>`,
    back: `<p class="tag">Luật Chứng khoán điều chỉnh</p>
<ul>
  <li><strong>Chào bán ra công chúng</strong> (mọi tổ chức phát hành): qua phương tiện thông tin đại chúng; cho từ 100 nhà đầu tư trở lên không kể chuyên nghiệp; hoặc cho nhà đầu tư không xác định (khoản 19 Điều 4; Điều 14–19 Luật Chứng khoán).</li>
  <li><strong>Chào bán riêng lẻ / cho cổ đông hiện hữu của công ty đại chúng, công ty chứng khoán, công ty quản lý quỹ</strong> — kể cả công ty chứng khoán/công ty quản lý quỹ chưa đại chúng (Điều 31 Luật Chứng khoán; khoản 5 Điều 31 cho phát hành cho cổ đông hiện hữu).</li>
</ul>
<p class="tag">Luật Doanh nghiệp điều chỉnh</p>
<ul>
  <li>Chào bán <strong>riêng lẻ</strong> (hoặc cho cổ đông hiện hữu) của tổ chức phát hành <strong>không phải công ty đại chúng</strong> và không phải công ty chứng khoán/công ty quản lý quỹ → Điều 30 Luật Chứng khoán dẫn chiếu Luật Doanh nghiệp; Luật Doanh nghiệp Điều 123, 125.</li>
  <li>Luật Doanh nghiệp Điều 123 khoản 3: chào bán ra công chúng, chào bán của công ty đại chúng và tổ chức khác thực hiện theo pháp luật về chứng khoán.</li>
</ul>
<p class="tag">Mốc phân biệt</p>
<p>Ra công chúng → Luật Chứng khoán. Riêng lẻ → xem tổ chức phát hành: đại chúng/công ty chứng khoán/công ty quản lý quỹ → Luật Chứng khoán; còn lại → Luật Doanh nghiệp. Công ty đại chúng vẫn theo Luật Doanh nghiệp ở thủ tục nội bộ (Đại hội đồng cổ đông…).</p>
<p class="src">Nguồn: slide 15 · Luật Chứng khoán 2019 (Điều 4 khoản 19–20; Điều 14–16, 30, 31) · Luật Doanh nghiệp 2020 (Điều 123–125)</p>`
  },
  {
    id: "cd1-s15-q2-ubcknn-vbqppl",
    front: `<p class="q">Ủy ban Chứng khoán Nhà nước có thẩm quyền xây dựng và ban hành văn bản quy phạm pháp luật không? Tại sao?</p>`,
    back: `<p class="tag">Không</p>
<ul>
  <li>Ủy ban Chứng khoán Nhà nước là cơ quan thuộc Bộ Tài chính (khoản 1 Điều 9 Luật Chứng khoán), không thuộc chủ thể ban hành văn bản quy phạm pháp luật tại Điều 4 Luật Ban hành văn bản quy phạm pháp luật 2025.</li>
  <li>Nhiệm vụ: <strong>trình Bộ trưởng Bộ Tài chính</strong> ban hành hoặc để trình cấp có thẩm quyền ban hành văn bản quy phạm pháp luật về chứng khoán & thị trường chứng khoán (điểm a khoản 1 Điều 9 Luật Chứng khoán).</li>
  <li>Ủy ban Chứng khoán Nhà nước chỉ ban hành văn bản cá biệt (quyết định cấp phép, xử lý vi phạm…) và quy chế nội bộ — không phải văn bản quy phạm pháp luật.</li>
</ul>
<p class="tag">Hệ quả</p>
<p>Muốn ban hành quy phạm mới: Bộ Tài chính → Thông tư; Chính phủ → Nghị định; Quốc hội → Luật.</p>
<p class="src">Nguồn: slide 15 · Luật Chứng khoán 2019 (Điều 9) · Luật Ban hành văn bản quy phạm pháp luật 2025 (Điều 4)</p>`
  },
  {
    id: "cd1-s15-q3-ldn-ctck",
    front: `<p class="q">Công ty chứng khoán, công ty quản lý quỹ đầu tư chứng khoán chịu sự điều chỉnh của Luật Doanh nghiệp như thế nào? Cho ví dụ.</p>`,
    back: `<p class="tag">Luật Doanh nghiệp điều chỉnh (tư cách doanh nghiệp)</p>
<ul>
  <li>Thành lập, điều lệ, cơ cấu tổ chức (Đại hội đồng cổ đông, Hội đồng quản trị, Ban kiểm soát/Ủy ban kiểm toán), quyền và nghĩa vụ cổ đông.</li>
  <li>Tăng/giảm vốn, chào bán cổ phần (Điều 123–125), mua lại cổ phần, hợp nhất/sáp nhập, giải thể.</li>
</ul>
<p class="tag">Luật Chứng khoán điều chỉnh (chuyên ngành)</p>
<ul>
  <li>Giấy phép thành lập và hoạt động, vốn pháp định, nghiệp vụ, nhân sự có chứng chỉ, giới hạn đầu tư, báo cáo, quản trị công ty đại chúng.</li>
</ul>
<p class="tag">Ví dụ</p>
<ul>
  <li>Công ty chứng khoán (công ty cổ phần) phát hành cho cổ đông hiện hữu: thủ tục Đại hội đồng cổ đông theo Luật Doanh nghiệp (Điều 124); điều kiện chào bán theo Luật Chứng khoán — kể cả khi chưa đại chúng (khoản 5 Điều 31).</li>
  <li>Sáp nhập công ty chứng khoán: trình tự theo Luật Doanh nghiệp + phải được Ủy ban Chứng khoán Nhà nước chấp thuận theo Luật Chứng khoán.</li>
  <li>Công ty chứng khoán/công ty quản lý quỹ là công ty cổ phần hoặc công ty trách nhiệm hữu hạn: Luật Doanh nghiệp quy định loại hình, điều lệ; Luật Chứng khoán Điều 74 quy định điều kiện cổ đông/thành viên góp vốn.</li>
</ul>
<p class="src">Nguồn: slide 15 · Luật Doanh nghiệp 2020 (Điều 123–125) · Luật Chứng khoán 2019 (Điều 9, 31, 74)</p>`
  },
  {
    id: "cd1-s16-van-de-moi-lien-bo",
    front: `<p class="q">Vấn đề mới phát sinh trên thị trường chứng khoán cần quy định nhưng liên quan đến nhiệm vụ, quyền hạn, phạm vi quản lý nhà nước của từ hai Bộ trở lên — ban hành loại văn bản quy phạm pháp luật nào?</p>`,
    back: `<p class="tag">Đáp án: Thông tư liên tịch</p>
<ul>
  <li>Ban hành giữa các Bộ trưởng, Thủ trưởng cơ quan ngang Bộ có liên quan (khoản 9 Điều 4 Luật Ban hành văn bản quy phạm pháp luật 2025).</li>
  <li>Dùng khi nội dung quy định liên quan đến chức năng, nhiệm vụ, quyền hạn, phạm vi quản lý của từ hai cơ quan trở lên → bảo đảm thống nhất, tránh chồng chéo.</li>
</ul>
<p class="tag">Lưu ý</p>
<ul>
  <li>Nếu vấn đề vượt thẩm quyền của các Bộ (đặt ra quyền, nghĩa vụ mới hoặc chính sách mới) → trình Chính phủ ban hành Nghị định; cao hơn là Luật/Nghị quyết của Quốc hội.</li>
  <li>Thông tư liên tịch không thay thế Nghị định khi cần quy định vượt phạm vi thẩm quyền cấp Bộ.</li>
</ul>
<p class="src">Nguồn: slide 16 · Luật Ban hành văn bản quy phạm pháp luật 2025 (khoản 9 Điều 4; Điều 2, 3)</p>`
  },
  {
    id: "cd1-s28-bien-phap-an-ninh-ttck",
    front: `<p class="q">Biện pháp bảo đảm an ninh, an toàn thị trường chứng khoán KHÔNG bao gồm:</p>
<p class="q">a) Hủy bỏ đợt chào bán chứng khoán ra công chúng<br>b) Cấm đảm nhiệm chức vụ tại công ty chứng khoán<br>c) Ứng phó, khắc phục sự cố, sự kiện, biến động ảnh hưởng đến an toàn, ổn định và tính toàn vẹn của thị trường chứng khoán<br>d) Tạm ngừng, đình chỉ giao dịch đối với một hoặc một số chứng khoán niêm yết, đăng ký giao dịch</p>`,
    back: `<p class="tag">Đáp án: a — Hủy bỏ đợt chào bán chứng khoán ra công chúng</p>
<ul>
  <li>Điều 7 Luật Chứng khoán 2019 liệt kê 7 nhóm biện pháp: (1) giám sát an ninh, an toàn thị trường chứng khoán; (2) ứng phó, khắc phục sự cố, biến động; (3) tạm ngừng, đình chỉ giao dịch một hoặc một số chứng khoán niêm yết/đăng ký giao dịch; (4) tạm ngừng, đình chỉ/khôi phục hoạt động giao dịch của Sở giao dịch chứng khoán Việt Nam và công ty con; (5) tạm ngừng, đình chỉ/khôi phục hoạt động đăng ký, lưu ký, bù trừ, thanh toán của Tổng công ty lưu ký và bù trừ chứng khoán Việt Nam; (6) cấm đảm nhiệm chức vụ/cấm hoạt động chứng khoán có thời hạn hoặc vĩnh viễn; (7) phong tỏa tài khoản chứng khoán, yêu cầu phong tỏa tài khoản tiền.</li>
</ul>
<p class="tag">Vì sao a sai</p>
<p>Đình chỉ (Điều 27) và hủy bỏ (Điều 28) đợt chào bán ra công chúng là biện pháp xử lý đối với đợt chào bán — không nằm trong Điều 7.</p>
<p class="src">Nguồn: slide 26–28 · Luật Chứng khoán 2019 (Điều 7, 27, 28)</p>`
  },
  {
    id: "cd1-s31-thao-tung-ttck",
    front: `<p class="q">Trường hợp nào dưới đây được coi là hành vi thao túng thị trường chứng khoán?</p>
<p class="q">A. Giao dịch với khối lượng lớn trong một phiên<br>B. Đặt lệnh mua bán không nhằm mục đích giao dịch thực sự<br>C. Chậm công bố thông tin<br>D. Bán khối lượng lớn chứng khoán khi giá giảm sâu</p>`,
    back: `<p class="tag">Đáp án: B — Đặt lệnh mua, bán không nhằm mục đích giao dịch thực sự</p>
<p>Đây là dấu hiệu kinh điển của thao túng: đặt lệnh “ảo” để tạo cung – cầu giả tạo, gây hiểu nhầm về khối lượng/giá rồi hủy lệnh hoặc khớp với lệnh của chính mình.</p>
<p class="tag">Vì sao các đáp án khác không phải thao túng</p>
<ul>
  <li><strong>A.</strong> Giao dịch khối lượng lớn trong một phiên: có thể là giao dịch thật, pháp luật không cấm; chỉ bị coi là thao túng nếu kèm mục đích tạo cung cầu giả tạo.</li>
  <li><strong>C.</strong> Chậm công bố thông tin: vi phạm nghĩa vụ công bố thông tin, xử lý theo chế tài công bố thông tin — không phải thao túng.</li>
  <li><strong>D.</strong> Bán khối lượng lớn khi giá giảm sâu: quyết định đầu tư/bán thật, không đương nhiên là thao túng.</li>
</ul>
<p class="src">Nguồn: slide 29–31 · Luật Chứng khoán 2019 (khoản 3 Điều 12 — hành vi bị nghiêm cấm)</p>`
  },
  {
    id: "cd1-s34-dang-ky-chao-ban-cong-khai",
    front: `<p class="q">Tổ chức phát hành phải nộp hồ sơ đăng ký chào bán chứng khoán ra công chúng với Ủy ban Chứng khoán Nhà nước trong trường hợp nào?</p>
<p class="q">A. Chào bán cổ phiếu cho từ 100 nhà đầu tư trở lên, không kể nhà đầu tư chứng khoán chuyên nghiệp<br>B. Chào bán ra công chúng để chuyển doanh nghiệp nhà nước thành công ty cổ phần<br>C. Công ty đại chúng chào bán riêng lẻ cho dưới 100 nhà đầu tư (không kể chuyên nghiệp)<br>D. Công ty đại chúng chào bán riêng lẻ cho nhà đầu tư chứng khoán chuyên nghiệp</p>`,
    back: `<p class="tag">Đáp án: A</p>
<ul>
  <li>A là <strong>chào bán ra công chúng</strong> (chào bán cho từ 100 nhà đầu tư trở lên, không kể chuyên nghiệp — khoản 19 Điều 4 Luật Chứng khoán) → phải nộp hồ sơ đăng ký với Ủy ban Chứng khoán Nhà nước (Điều 16 Luật Chứng khoán).</li>
  <li><strong>B sai:</strong> chào bán cổ phiếu ra công chúng để chuyển DNNN, công ty trách nhiệm hữu hạn MTV 100% vốn DNNN, đơn vị sự nghiệp công lập thành công ty cổ phần <strong>không phải đăng ký</strong> (điểm c khoản 2 Điều 16 Luật Chứng khoán).</li>
  <li><strong>C, D sai:</strong> là chào bán riêng lẻ (khoản 20 Điều 4) — công ty đại chúng thực hiện theo Điều 31 Luật Chứng khoán, không phải “đăng ký chào bán ra công chúng”.</li>
</ul>
<p class="src">Nguồn: slide 34 · Luật Chứng khoán 2019 (Điều 4 khoản 19–20; Điều 16, 31)</p>`
  },
  {
    id: "cd1-s38-chi-nhanh-nuoc-ngoai",
    front: `<p class="q">Công ty chứng khoán nước ngoài được lập bao nhiêu chi nhánh tại Việt Nam?</p>`,
    back: `<p class="tag">Đáp án: 01 chi nhánh</p>
<ul>
  <li><strong>Khoản 3 Điều 76 Luật Chứng khoán 2019:</strong> công ty chứng khoán, công ty quản lý quỹ nước ngoài chỉ được lập <strong>01 chi nhánh</strong> tại Việt Nam.</li>
  <li>Điều kiện (khoản 1 Điều 76): đáp ứng khoản 2 Điều 77 và chưa thành lập/góp vốn vào công ty chứng khoán, công ty quản lý quỹ tại Việt Nam do công ty nước ngoài sở hữu trên 49% vốn điều lệ; vốn cấp cho chi nhánh theo khoản 1 Điều 74; bảo đảm cơ sở vật chất và nhân sự theo khoản 4–5 Điều 74.</li>
</ul>
<p class="src">Nguồn: slide 38 · Luật Chứng khoán 2019 (Điều 76 khoản 3; Điều 74, 77)</p>`
  },
  {
    id: "cd1-s39-nghiep-vu-chi-nhanh-nn",
    front: `<p class="q">Chi nhánh công ty chứng khoán nước ngoài tại Việt Nam được thực hiện nghiệp vụ nào sau đây?</p>
<p class="q">a. Tư vấn đầu tư chứng khoán<br>b. Tự doanh chứng khoán<br>c. Bảo lãnh phát hành chứng khoán<br>d. Môi giới chứng khoán</p>`,
    back: `<p class="tag">Đáp án: a — Tư vấn đầu tư chứng khoán</p>
<ul>
  <li><strong>Khoản 7 Điều 86 Luật Chứng khoán 2019:</strong> chi nhánh công ty chứng khoán nước ngoài tại Việt Nam <strong>chỉ được thực hiện nghiệp vụ tư vấn đầu tư chứng khoán</strong>.</li>
  <li>Nghĩa là <strong>không được</strong> tự doanh, bảo lãnh phát hành, môi giới chứng khoán tại Việt Nam.</li>
  <li>Đối chiếu: chi nhánh công ty quản lý quỹ nước ngoài chỉ được cung cấp dịch vụ quản lý tài sản cho vốn huy động tại nước ngoài (cùng khoản 7 Điều 86).</li>
</ul>
<p class="src">Nguồn: slide 39 · Luật Chứng khoán 2019 (khoản 7 Điều 86; Điều 76)</p>`
  },
  {
    id: "cd1-s41-nghia-vu-chi-nhanh-nn",
    front: `<p class="q">Nghĩa vụ nào KHÔNG phải nghĩa vụ của chi nhánh công ty chứng khoán nước ngoài tại Việt Nam?</p>
<p class="q">a. Bảo đảm có tối thiểu 05 nhân viên có chứng chỉ hành nghề chứng khoán tại mỗi bộ phận trong các nghiệp vụ tại chi nhánh<br>b. Đăng ký thành lập và hoạt động tại Cơ quan đăng ký kinh doanh<br>c. Ký hợp đồng bằng văn bản với khách hàng khi cung cấp dịch vụ môi giới cho khách hàng<br>d. Thu thập thông tin về tình hình tài chính, khả năng chấp nhận rủi ro của khách hàng trước khi mở tài khoản giao dịch chứng khoán</p>`,
    back: `<p class="tag">Đáp án: a</p>
<ul>
  <li><strong>a sai:</strong> Luật Chứng khoán 2019 (khoản 5 Điều 74, áp dụng cho chi nhánh qua điểm c khoản 1 Điều 76) chỉ yêu cầu <strong>tối thiểu 03 nhân viên có chứng chỉ hành nghề chứng khoán cho mỗi nghiệp vụ</strong> + 01 nhân viên kiểm soát tuân thủ — không phải 05 nhân viên tại mỗi bộ phận.</li>
  <li><strong>b đúng:</strong> chi nhánh phải đăng ký kinh doanh tại Cơ quan đăng ký kinh doanh (khoản 1 Điều 71).</li>
  <li><strong>c đúng:</strong> ký hợp đồng bằng văn bản với khách hàng khi cung cấp dịch vụ (khoản 4 Điều 89).</li>
  <li><strong>d đúng:</strong> thu thập thông tin về tình hình tài chính, mục tiêu đầu tư, khả năng chấp nhận rủi ro của khách hàng (khoản 6 Điều 89).</li>
</ul>
<p class="src">Nguồn: slide 41 · Luật Chứng khoán 2019 (khoản 1 Điều 71; khoản 5 Điều 74; khoản 1 Điều 76; khoản 4 và 6 Điều 89)</p>`
  },
  {
    id: "cd1-s46-co-quan-quan-ly-nha-nuoc",
    front: `<p class="q">Cơ quan nào sau đây là cơ quan quản lý nhà nước về chứng khoán và thị trường chứng khoán tại Việt Nam?</p>
<p class="q">a) Chính phủ<br>b) Bộ Tài chính<br>c) Ủy ban Chứng khoán Nhà nước<br>d) Sở giao dịch chứng khoán<br>e) Ủy ban nhân dân các cấp</p>`,
    back: `<p class="tag">Đáp án: a, b, c, e</p>
<ul>
  <li><strong>a — Chính phủ:</strong> thống nhất quản lý nhà nước về chứng khoán và thị trường chứng khoán (khoản 1 Điều 8).</li>
  <li><strong>b — Bộ Tài chính:</strong> chịu trách nhiệm trước Chính phủ thực hiện quản lý nhà nước về chứng khoán và thị trường chứng khoán (khoản 2 Điều 8).</li>
  <li><strong>c — Ủy ban Chứng khoán Nhà nước:</strong> cơ quan thuộc Bộ Tài chính, tham mưu giúp Bộ trưởng Bộ Tài chính quản lý nhà nước về chứng khoán và thị trường chứng khoán (khoản 1 Điều 9).</li>
  <li><strong>e — Ủy ban nhân dân các cấp:</strong> quản lý nhà nước về chứng khoán và thị trường chứng khoán tại địa phương (khoản 4 Điều 8).</li>
  <li><strong>d sai:</strong> Sở giao dịch chứng khoán là pháp nhân tổ chức, vận hành thị trường giao dịch chứng khoán — đối tượng được quản lý, không phải cơ quan quản lý nhà nước.</li>
</ul>
<p class="src">Nguồn: slide 46 · Luật Chứng khoán 2019 (Điều 8, Điều 9)</p>`
  },
  {
    id: "cd1-s47-pham-vi-luat-chung-khoan",
    front: `<p class="q">Nội dung nào sau đây thuộc phạm vi điều chỉnh của Luật Chứng khoán?</p>
<p class="q">a) Thành lập, tổ chức và hoạt động của công ty đại chúng<br>b) Tất cả hoạt động chào bán, phát hành chứng khoán của doanh nghiệp<br>c) Chào bán chứng khoán ra công chúng và chào bán, phát hành của công ty đại chúng</p>`,
    back: `<p class="tag">Đáp án: c</p>
<ul>
  <li><strong>c đúng:</strong> chào bán chứng khoán ra công chúng và chào bán, phát hành chứng khoán của công ty đại chúng là các hoạt động thuộc phạm vi điều chỉnh của Luật Chứng khoán (Chương II, từ Điều 13 đến Điều 31); Điều 1 hiện hành quy định Luật điều chỉnh các hoạt động về chứng khoán và thị trường chứng khoán.</li>
  <li><strong>a sai:</strong> việc thành lập, tổ chức và hoạt động của doanh nghiệp (kể cả công ty đại chúng) do Luật Doanh nghiệp điều chỉnh; Luật Chứng khoán chỉ điều chỉnh các nội dung chuyên ngành về công ty đại chúng (điều kiện trở thành, đăng ký, quyền và nghĩa vụ, quản trị công ty đại chúng).</li>
  <li><strong>b sai:</strong> không phải “tất cả” — chào bán riêng lẻ của tổ chức phát hành không phải công ty đại chúng thực hiện theo Luật Doanh nghiệp (Điều 30 Luật Chứng khoán dẫn chiếu).</li>
</ul>
<p class="src">Nguồn: slide 47 · Luật Chứng khoán 2019 (Điều 1; Điều 30)</p>`
  },
  {
    id: "cd1-s48-chung-khoan-khong-bao-gom",
    front: `<p class="q">Theo Luật Chứng khoán 2019, chứng khoán KHÔNG bao gồm loại nào sau đây?</p><p class="q">1. Chứng khoán phái sinh<br>2. Chứng chỉ lưu ký<br>3. Chứng quyền có bảo đảm<br>4. Tín phiếu, hối phiếu</p>`,
    back: `<p class="tag">Đáp án: 4 — Tín phiếu, hối phiếu</p><ul><li>Khoản 1 Điều 4 Luật Chứng khoán 2019 liệt kê chứng khoán gồm: cổ phiếu, trái phiếu, chứng chỉ quỹ; chứng quyền, chứng quyền có bảo đảm, quyền mua cổ phần, chứng chỉ lưu ký; chứng khoán phái sinh; các loại khác do Chính phủ quy định.</li><li>Hối phiếu là công cụ chuyển nhượng (theo pháp luật về các công cụ chuyển nhượng), không phải chứng khoán; khoản 1 Điều 4 Luật Chứng khoán 2019 không liệt kê tín phiếu trong danh mục chứng khoán.</li></ul><p class="src">Nguồn: slide 48 · Luật Chứng khoán 2019 (khoản 1 Điều 4)</p>`
  },
  {
    id: "cd1-s49-chung-khoan-phai-sinh",
    front: `<p class="q">Theo pháp luật chứng khoán và thị trường chứng khoán, loại chứng khoán nào sau đây là chứng khoán phái sinh?</p><p class="q">A. Hợp đồng tương lai, hợp đồng quyền chọn<br>B. Quyền mua cổ phần<br>C. Chứng quyền<br>D. Tất cả các phương án đều đúng</p>`,
    back: `<p class="tag">Đáp án: A</p><ul><li>Khoản 9 Điều 4 Luật Chứng khoán 2019: chứng khoán phái sinh là công cụ tài chính dưới dạng hợp đồng, bao gồm hợp đồng quyền chọn, hợp đồng tương lai, hợp đồng kỳ hạn.</li><li>Quyền mua cổ phần và chứng quyền là các loại chứng khoán khác (điểm b khoản 1 Điều 4), không phải chứng khoán phái sinh.</li><li>D sai vì B và C không phải chứng khoán phái sinh.</li></ul><p class="src">Nguồn: slide 49 · Luật Chứng khoán 2019 (khoản 9 Điều 4)</p>`
  },
  {
    id: "cd1-s50-dinh-chi-giao-dich",
    front: `<p class="q">Ủy ban Chứng khoán Nhà nước thực hiện đình chỉ giao dịch chứng khoán khi nào?</p><p class="q">A. Tổ chức niêm yết, tổ chức đăng ký giao dịch không có biện pháp khắc phục nguyên nhân dẫn đến việc chứng khoán bị đưa vào diện cảnh báo, kiểm soát, hạn chế giao dịch<br>B. Khối lượng giao dịch quá lớn<br>C. Khi có nhà đầu tư nước ngoài mua vượt tỷ lệ sở hữu<br>D. Không có trường hợp nào</p>`,
    back: `<p class="tag">Đáp án: A</p><ul><li>Đình chỉ giao dịch đối với chứng khoán là biện pháp bảo vệ thị trường, áp dụng khi tổ chức niêm yết, tổ chức đăng ký giao dịch không khắc phục được nguyên nhân khiến chứng khoán bị đưa vào diện cảnh báo, kiểm soát, hạn chế giao dịch (Nghị định 155/2020/NĐ-CP quy định về đưa chứng khoán vào diện cảnh báo, kiểm soát, hạn chế giao dịch và tạm ngừng, đình chỉ giao dịch).</li><li>B, C không phải căn cứ đình chỉ giao dịch; D sai vì A là căn cứ đúng.</li></ul><p class="src">Nguồn: slide 50 · Luật Chứng khoán 2019 (Điều 9) · Nghị định 155/2020/NĐ-CP</p>`
  },
  {
    id: "cd1-s51-trinh-tu-thanh-lap-ctck",
    front: `<p class="q">Theo Luật Chứng khoán 2019, để thành lập công ty chứng khoán, thủ tục nào đúng?</p><p class="q">A. Đăng ký doanh nghiệp tại cơ quan đăng ký kinh doanh trước, sau đó nộp hồ sơ đề nghị Ủy ban Chứng khoán Nhà nước cấp Giấy phép thành lập và hoạt động<br>B. Nộp hồ sơ đề nghị Ủy ban Chứng khoán Nhà nước cấp Giấy phép thành lập và hoạt động trước, sau đó thực hiện đăng ký doanh nghiệp tại cơ quan đăng ký kinh doanh<br>C. Giấy chứng nhận của Ủy ban Chứng khoán Nhà nước đồng thời là Giấy chứng nhận đăng ký doanh nghiệp nên không cần đăng ký doanh nghiệp<br>D. Không bắt buộc phải thực hiện cả hai thủ tục</p>`,
    back: `<p class="tag">Đáp án: B</p><ul><li>Khoản 1 Điều 71 Luật Chứng khoán 2019: sau khi được cấp Giấy phép thành lập và hoạt động kinh doanh chứng khoán, công ty chứng khoán phải đăng ký doanh nghiệp theo quy định của Luật Doanh nghiệp.</li><li>A sai thứ tự; C sai vì giấy phép của Ủy ban Chứng khoán Nhà nước không thay thế đăng ký doanh nghiệp; D sai vì bắt buộc cả hai thủ tục.</li></ul><p class="src">Nguồn: slide 51 · Luật Chứng khoán 2019 (khoản 1 Điều 71)</p>`
  },
  {
    id: "cd1-s53-co-dong-lon",
    front: `<p class="q">Cổ đông lớn là người sở hữu cổ phiếu có quyền biểu quyết của công ty đại chúng:</p><p class="q">A. Từ 5% trở lên<br>B. Từ 5% trở lên và nắm giữ liên tục ít nhất 6 tháng tại một công ty đại chúng<br>C. Từ 10% trở lên<br>D. Từ 15% trở lên</p>`,
    back: `<p class="tag">Đáp án: A</p><ul><li>Khoản 18 Điều 4 Luật Chứng khoán 2019: cổ đông lớn là cổ đông sở hữu từ 5% trở lên số cổ phiếu có quyền biểu quyết của một tổ chức phát hành.</li><li>B sai vì luật không yêu cầu thời gian nắm giữ 6 tháng; C, D sai mức tỷ lệ.</li></ul><p class="src">Nguồn: slide 53 · Luật Chứng khoán 2019 (khoản 18 Điều 4)</p>`
  },
  {
    id: "cd1-s54-sgdc-to-chuc-thi-truong",
    front: `<p class="q">Theo quy định hiện hành, Sở Giao dịch Chứng khoán tổ chức thị trường giao dịch cho loại chứng khoán nào sau đây?</p>
<p class="q">A. Tín phiếu kho bạc<br>B. Hợp đồng bảo hiểm<br>C. Cổ phiếu của công ty cổ phần chưa đại chúng<br>D. Chứng quyền có bảo đảm</p>`,
    back: `<p class="tag">Đáp án: D</p>
<ul>
  <li>Khoản 1 Điều 42 Luật Chứng khoán 2019: Sở Giao dịch Chứng khoán Việt Nam và công ty con tổ chức thị trường cho chứng khoán đủ điều kiện niêm yết; chứng khoán của doanh nghiệp nhà nước chuyển đổi thành công ty cổ phần; chứng khoán của doanh nghiệp khác chưa đủ điều kiện niêm yết; chứng khoán của doanh nghiệp khởi nghiệp sáng tạo; chứng khoán phái sinh và loại khác theo quy định của Chính phủ.</li>
  <li>Chứng quyền có bảo đảm là chứng khoán được niêm yết, đăng ký giao dịch trên Sở Giao dịch Chứng khoán.</li>
  <li>Tín phiếu kho bạc, hợp đồng bảo hiểm, cổ phiếu của công ty cổ phần chưa đại chúng không thuộc phạm vi tổ chức thị trường nêu trên.</li>
</ul>
<p class="src">Nguồn: slide 54 · Luật Chứng khoán 2019 (khoản 1 Điều 42)</p>`
  },
  {
    id: "cd1-s55-phuong-an-su-dung-von",
    front: `<p class="q">Theo Luật Chứng khoán 2019 (sửa đổi bởi Luật số 56/2024/QH15), tổ chức chào bán chứng khoán ra công chúng phải có phương án sử dụng vốn thu được từ đợt chào bán:</p>
<p class="q">A. Được phê duyệt và thông qua bởi Hội đồng quản trị<br>B. Thuộc thẩm quyền của Ban Giám đốc/Ban Điều hành<br>C. Được Đại hội đồng cổ đông thông qua<br>D. Được Ủy ban Chứng khoán Nhà nước phê duyệt phương án</p>`,
    back: `<p class="tag">Đáp án: C</p>
<ul>
  <li>Điểm c khoản 1 Điều 15 Luật Chứng khoán 2019: điều kiện chào bán cổ phiếu lần đầu ra công chúng gồm có phương án phát hành và phương án sử dụng vốn thu được từ đợt chào bán cổ phiếu được Đại hội đồng cổ đông thông qua.</li>
  <li>A, B sai thẩm quyền; D sai vì Ủy ban Chứng khoán Nhà nước không phê duyệt phương án sử dụng vốn.</li>
</ul>
<p class="src">Nguồn: slide 55 · Luật Chứng khoán 2019 (điểm c khoản 1 Điều 15; Luật số 56/2024/QH15)</p>`
  },
  {
    id: "cd1-s56-cong-bo-thong-tin-bat-thuong",
    front: `<p class="q">Công ty đại chúng có trách nhiệm công bố thông tin bất thường trong thời hạn:</p>
<p class="q">A. 12 giờ<br>B. 24 giờ<br>C. 36 giờ<br>D. 48 giờ</p>`,
    back: `<p class="tag">Đáp án: B — 24 giờ</p>
<ul>
  <li>Theo Thông tư 96/2020/TT-BTC hướng dẫn công bố thông tin trên thị trường chứng khoán, công ty đại chúng phải công bố thông tin bất thường trong thời hạn 24 giờ kể từ khi xảy ra sự kiện.</li>
  <li>12, 36, 48 giờ không đúng thời hạn luật định.</li>
</ul>
<p class="src">Nguồn: slide 56 · Thông tư 96/2020/TT-BTC (quy định công bố thông tin bất thường)</p>`
  },
  {
    id: "cd1-s57-to-chuc-kinh-doanh-chung-khoan",
    front: `<p class="q">Tổ chức nào dưới đây không thuộc hệ thống các tổ chức kinh doanh chứng khoán?</p>
<p class="q">A. Công ty chứng khoán<br>B. Công ty quản lý quỹ đầu tư chứng khoán<br>C. Quỹ đầu tư chứng khoán<br>D. Ngân hàng thương mại</p>`,
    back: `<p class="tag">Đáp án: C — Quỹ đầu tư chứng khoán</p>
<ul>
  <li>Quỹ đầu tư chứng khoán không phải tổ chức kinh doanh chứng khoán: quỹ là tài sản đầu tư do công ty quản lý quỹ quản lý, không trực tiếp thực hiện nghiệp vụ kinh doanh chứng khoán.</li>
  <li>Công ty chứng khoán và công ty quản lý quỹ đầu tư chứng khoán là các tổ chức kinh doanh chứng khoán (Chương VI Luật Chứng khoán 2019).</li>
  <li>Lưu ý: ngân hàng thương mại không thuộc nhóm công ty kinh doanh chứng khoán chuyên ngành, nhưng tham gia thị trường với tư cách thành viên lưu ký, thành viên giao dịch đặc biệt, ngân hàng thanh toán.</li>
</ul>
<p class="src">Nguồn: slide 57 · Luật Chứng khoán 2019 (Chương VI; Điều 47, Điều 56)</p>`
  },
  {
    id: "cd1-s58-thanh-vien-luu-ky",
    front: `<p class="q">Tổ chức nào là thành viên lưu ký của Tổng công ty Lưu ký và Bù trừ Chứng khoán Việt Nam?</p>
<p class="q">1. Các công ty đại chúng niêm yết<br>2. Công ty chứng khoán và ngân hàng thương mại được Ủy ban Chứng khoán Nhà nước cấp Giấy chứng nhận đăng ký hoạt động lưu ký chứng khoán và được Tổng công ty Lưu ký và Bù trừ Chứng khoán Việt Nam chấp thuận<br>3. Chỉ công ty chứng khoán<br>4. Nhà đầu tư</p>`,
    back: `<p class="tag">Đáp án: 2</p>
<ul>
  <li>Khoản 1 Điều 56 Luật Chứng khoán 2019: thành viên lưu ký là công ty chứng khoán, ngân hàng thương mại, chi nhánh ngân hàng nước ngoài được Ủy ban Chứng khoán Nhà nước cấp Giấy chứng nhận đăng ký hoạt động lưu ký chứng khoán và được Tổng công ty Lưu ký và Bù trừ Chứng khoán Việt Nam chấp thuận trở thành thành viên lưu ký.</li>
  <li>1 sai (công ty đại chúng niêm yết không phải thành viên lưu ký); 3 sai (không chỉ công ty chứng khoán); 4 sai (nhà đầu tư không phải thành viên lưu ký).</li>
</ul>
<p class="src">Nguồn: slide 58 · Luật Chứng khoán 2019 (khoản 1 Điều 56)</p>`
  },
  {
    id: "cd1-s59-thanh-tra-ubcknn",
    front: `<p class="q">Ủy ban Chứng khoán Nhà nước có quyền gì trong thanh tra, kiểm tra tổ chức kinh doanh chứng khoán?</p>
<p class="q">A. Quyết định khởi tố hình sự<br>B. Kiểm tra công tác bảo vệ bí mật nhà nước liên quan đến hoạt động của tổ chức kinh doanh chứng khoán<br>C. Truy thu thuế<br>D. Yêu cầu tổ chức, cá nhân đến làm việc liên quan đến nội dung thanh tra, kiểm tra</p>`,
    back: `<p class="tag">Đáp án: D</p>
<ul>
  <li>Trong thanh tra, kiểm tra, Ủy ban Chứng khoán Nhà nước có quyền yêu cầu tổ chức, cá nhân cung cấp thông tin, tài liệu và đến làm việc theo nội dung thanh tra, kiểm tra (Điều 9 Luật Chứng khoán 2019 và pháp luật về thanh tra).</li>
  <li>A sai: quyết định khởi tố hình sự thuộc cơ quan điều tra, viện kiểm sát; B sai: không phải quyền thanh tra chứng khoán; C sai: truy thu thuế thuộc cơ quan thuế.</li>
</ul>
<p class="src">Nguồn: slide 59 · Luật Chứng khoán 2019 (Điều 9)</p>`
  },
  {
    id: "cd1-s60-hanh-vi-phu-hop",
    front: `<p class="q">Hành vi nào sau đây là phù hợp với quy định của pháp luật chứng khoán?</p>
<p class="q">A. Sử dụng thông tin nội bộ để mua bán chứng khoán<br>B. Gọi điện thoại yêu cầu công ty chứng khoán nơi mình mở tài khoản để đặt lệnh mua chứng khoán<br>C. Nhà đầu tư trực tiếp ký hợp đồng với nhân viên có chứng chỉ hành nghề của công ty chứng khoán để ủy thác việc mua bán chứng khoán<br>D. Công ty chứng khoán nhận ủy quyền của khách hàng thực hiện chuyển tiền nội bộ giữa các tài khoản của các khách hàng trong công ty chứng khoán</p>`,
    back: `<p class="tag">Đáp án: B</p>
<ul>
  <li>Đặt lệnh mua chứng khoán qua điện thoại với công ty chứng khoán nơi mở tài khoản là giao dịch thông thường, phù hợp quy định (công ty chứng khoán phải ghi âm, lưu trữ theo quy chế).</li>
  <li>A sai: sử dụng thông tin nội bộ để mua bán chứng khoán là hành vi bị nghiêm cấm (khoản 2 Điều 12 Luật Chứng khoán 2019).</li>
  <li>C sai: hợp đồng cung cấp dịch vụ phải ký với công ty chứng khoán, không ký với nhân viên (khoản 4 Điều 89 Luật Chứng khoán 2019); nhân viên không được nhận ủy thác mua bán chứng khoán của khách hàng.</li>
  <li>D sai: công ty chứng khoán chỉ được sử dụng tài khoản, tài sản của khách hàng khi được khách hàng ủy thác đúng quy định; tự chuyển tiền giữa tài khoản các khách hàng là trái quy định (khoản 5 Điều 12 Luật Chứng khoán 2019).</li>
</ul>
<p class="src">Nguồn: slide 60 · Luật Chứng khoán 2019 (Điều 12, Điều 89)</p>`
  },
  {
    id: "cd1-s61-sgdc-viet-nam",
    front: `<p class="q">Sở Giao dịch Chứng khoán Việt Nam là:</p>
<p class="q">A. Doanh nghiệp tư nhân<br>B. Công ty cổ phần<br>C. Nhà nước nắm giữ trên 50% vốn điều lệ<br>D. Cơ quan quản lý nhà nước về tổ chức thị trường giao dịch chứng khoán</p>`,
    back: `<p class="tag">Đáp án: C</p>
<ul>
  <li>Khoản 1 Điều 43 Luật Chứng khoán 2019: Sở Giao dịch Chứng khoán Việt Nam là doanh nghiệp được thành lập và hoạt động theo Luật Chứng khoán và Luật Doanh nghiệp, do Nhà nước nắm giữ trên 50% vốn điều lệ hoặc tổng số cổ phần có quyền biểu quyết.</li>
  <li>A sai; B chưa đủ vì hình thức doanh nghiệp do Thủ tướng Chính phủ quyết định; D sai vì Sở Giao dịch Chứng khoán không phải cơ quan quản lý nhà nước mà chịu sự quản lý, giám sát của Ủy ban Chứng khoán Nhà nước.</li>
</ul>
<p class="src">Nguồn: slide 61 · Luật Chứng khoán 2019 (khoản 1 Điều 43)</p>`
  },
  {
    id: "cd1-s62-thanh-vien-giao-dich",
    front: `<p class="q">Thành viên giao dịch trên Sở Giao dịch Chứng khoán bao gồm:</p>
<p class="q">A. Công ty đại chúng<br>B. Công ty chứng khoán<br>C. Công ty niêm yết trên Sở Giao dịch Chứng khoán<br>D. Nhà đầu tư chứng khoán</p>`,
    back: `<p class="tag">Đáp án: B</p>
<ul>
  <li>Khoản 1 Điều 47 Luật Chứng khoán 2019: thành viên giao dịch là công ty chứng khoán được Sở Giao dịch Chứng khoán Việt Nam chấp thuận trở thành thành viên giao dịch.</li>
  <li>Ngoài ra còn có thành viên giao dịch đặc biệt là ngân hàng thương mại, chi nhánh ngân hàng nước ngoài và tổ chức khác được chấp thuận.</li>
  <li>A, C, D không phải thành viên giao dịch.</li>
</ul>
<p class="src">Nguồn: slide 62 · Luật Chứng khoán 2019 (khoản 1 Điều 47)</p>`
  },
  {
    id: "cd1-s63-cong-ty-dai-chung-30-ty",
    front: `<p class="q">Theo Luật Chứng khoán 2019, công ty đại chúng là công ty cổ phần có vốn điều lệ đã góp từ bao nhiêu trở lên?</p>
<p class="q">A. 10 tỷ đồng<br>B. 30 tỷ đồng<br>C. 50 tỷ đồng<br>D. 100 tỷ đồng</p>`,
    back: `<p class="tag">Đáp án: B — 30 tỷ đồng</p>
<ul>
  <li>Điểm a khoản 1 Điều 32 Luật Chứng khoán 2019: công ty đại chúng là công ty cổ phần có vốn điều lệ đã góp từ 30 tỷ đồng trở lên, có vốn chủ sở hữu từ 30 tỷ đồng trở lên và có tối thiểu 10% số cổ phiếu có quyền biểu quyết do ít nhất 100 nhà đầu tư không phải cổ đông lớn nắm giữ.</li>
  <li>Công ty đã chào bán thành công cổ phiếu lần đầu ra công chúng thông qua đăng ký với Ủy ban Chứng khoán Nhà nước cũng là công ty đại chúng (điểm b khoản 1 Điều 32).</li>
</ul>
<p class="src">Nguồn: slide 63 · Luật Chứng khoán 2019 (khoản 1 Điều 32)</p>`
  },
  {
    id: "cd1-s64-chao-ban-them-dieu-kien",
    front: `<p class="q">Tổ chức chào bán thêm cổ phiếu ra công chúng phải đáp ứng điều kiện có kết quả hoạt động kinh doanh của năm liền trước năm đăng ký chào bán:</p>
<p class="q">A. Có lãi, đồng thời không có lỗ lũy kế tính đến năm đăng ký chào bán<br>B. Không có lỗ lũy kế tính đến thời điểm nộp hồ sơ đăng ký chào bán với Ủy ban Chứng khoán Nhà nước<br>C. Không có khoản vay ngân hàng quá hạn<br>D. Không có vi phạm về thuế</p>`,
    back: `<p class="tag">Đáp án: A</p>
<ul>
  <li>Điểm b khoản 2 Điều 15 Luật Chứng khoán 2019: điều kiện chào bán thêm cổ phiếu ra công chúng của công ty đại chúng gồm hoạt động kinh doanh của năm liền trước năm đăng ký chào bán phải có lãi, đồng thời không có lỗ lũy kế tính đến năm đăng ký chào bán.</li>
  <li>B, C, D không phải điều kiện của luật.</li>
</ul>
<p class="src">Nguồn: slide 64 · Luật Chứng khoán 2019 (điểm b khoản 2 Điều 15)</p>`
  },
  {
    id: "cd1-s65-dieu-kien-chao-ban-ra-cong-chung",
    front: `<p class="q">Theo Luật Chứng khoán 2019, đâu là một trong các điều kiện chào bán chứng khoán ra công chúng?</p>
<p class="q">A. Có vốn điều lệ đã góp tại thời điểm đăng ký chào bán từ 20 tỷ đồng trở lên<br>B. Có tối thiểu 15% số cổ phiếu có quyền biểu quyết của tổ chức phát hành phải được bán cho ít nhất 100 nhà đầu tư không phải là cổ đông lớn<br>C. Có phương án phát hành và phương án sử dụng vốn thu được từ đợt chào bán được Đại hội đồng cổ đông thông qua<br>D. Có hợp đồng bảo lãnh phát hành chứng khoán</p>`,
    back: `<p class="tag">Đáp án: C</p>
<ul>
  <li>Điểm c khoản 1 Điều 15 Luật Chứng khoán 2019: có phương án phát hành và phương án sử dụng vốn thu được từ đợt chào bán cổ phiếu được Đại hội đồng cổ đông thông qua. Điều kiện này được dẫn chiếu cho cả chào bán thêm cổ phiếu (điểm a khoản 2 Điều 15).</li>
  <li>A sai: vốn điều lệ đã góp tối thiểu là 30 tỷ đồng, không phải 20 tỷ đồng.</li>
  <li>B cũng là điều kiện nhưng chỉ áp dụng với chào bán cổ phiếu lần đầu ra công chúng (điểm d khoản 1 Điều 15), không phải điều kiện chung cho mọi đợt chào bán ra công chúng.</li>
  <li>D sai: bảo lãnh phát hành không bắt buộc.</li>
</ul>
<p class="src">Nguồn: slide 65 · Luật Chứng khoán 2019 (khoản 1 và khoản 2 Điều 15)</p>`
  },
  {
    id: "cd1-s66-khong-phai-chung-khoan-phai-sinh",
    front: `<p class="q">Theo Luật Chứng khoán 2019, loại chứng khoán nào sau đây KHÔNG được coi là chứng khoán phái sinh?</p>
<p class="q">A. Hợp đồng quyền chọn<br>B. Hợp đồng tương lai<br>C. Hợp đồng kỳ hạn<br>D. Cổ phiếu ưu đãi biểu quyết</p>`,
    back: `<p class="tag">Đáp án: D</p>
<ul>
  <li>Cổ phiếu ưu đãi biểu quyết là cổ phiếu — chứng khoán cơ sở, không phải chứng khoán phái sinh.</li>
  <li>Khoản 9 Điều 4 Luật Chứng khoán 2019: chứng khoán phái sinh là công cụ tài chính dưới dạng hợp đồng, bao gồm hợp đồng quyền chọn, hợp đồng tương lai, hợp đồng kỳ hạn.</li>
</ul>
<p class="src">Nguồn: slide 66 · Luật Chứng khoán 2019 (khoản 9 Điều 4)</p>`
  },
  {
    id: "cd1-s67-huy-tu-cach-cong-ty-dai-chung",
    front: `<p class="q">Công ty đại chúng bị hủy tư cách đại chúng khi:</p>
<p class="q">A. Không thực hiện công bố thông tin trong 02 năm liên tục về báo cáo tài chính năm được kiểm toán<br>B. Chậm thực hiện nghĩa vụ thuế và có yêu cầu của cơ quan thuế về việc hủy tư cách công ty đại chúng<br>C. Công ty có thông báo của Tòa án về việc mở thủ tục phá sản<br>D. Có cổ đông là nhà đầu tư chiến lược rút vốn</p>`,
    back: `<p class="tag">Đáp án: A</p>
<ul>
  <li>Điểm b khoản 1 Điều 38 Luật Chứng khoán 2019: công ty đại chúng bị hủy tư cách khi không thực hiện công bố thông tin trong 02 năm liên tục về báo cáo tài chính năm được kiểm toán.</li>
  <li>Các trường hợp khác gồm: không còn đáp ứng điều kiện công ty đại chúng (điểm a); không công bố thông tin 02 năm liên tục về nghị quyết Đại hội đồng cổ đông thường niên (điểm c); không đăng ký lưu ký hoặc không niêm yết, đăng ký giao dịch trong thời hạn 01 năm (điểm d).</li>
  <li>B, C, D không thuộc các trường hợp hủy tư cách.</li>
</ul>
<p class="src">Nguồn: slide 67 · Luật Chứng khoán 2019 (khoản 1 Điều 38)</p>`
  },
  {
    id: "cd1-s68-tham-quyen-xu-phat",
    front: `<p class="q">Người có thẩm quyền xử phạt vi phạm hành chính trong lĩnh vực chứng khoán và thị trường chứng khoán là:</p>
<p class="q">A. Chủ tịch Ủy ban Chứng khoán Nhà nước; Chánh thanh tra Ủy ban Chứng khoán Nhà nước; Trưởng đoàn thanh tra chuyên ngành của Ủy ban Chứng khoán Nhà nước; Chủ tịch Ủy ban nhân dân cấp tỉnh<br>B. Bộ trưởng Bộ Tài chính; Chủ tịch Ủy ban Chứng khoán Nhà nước; Chánh thanh tra Ủy ban Chứng khoán Nhà nước<br>C. Bộ trưởng Bộ Tài chính; Chủ tịch Ủy ban Chứng khoán Nhà nước<br>D. Chủ tịch Ủy ban Chứng khoán Nhà nước; Chánh thanh tra Ủy ban Chứng khoán Nhà nước; Trưởng đoàn thanh tra chuyên ngành của Ủy ban Chứng khoán Nhà nước; Chủ tịch Ủy ban nhân dân các cấp</p>`,
    back: `<p class="tag">Đáp án: A</p>
<ul>
  <li>Theo Nghị định 156/2020/NĐ-CP (được sửa đổi, bổ sung) quy định xử phạt vi phạm hành chính trong lĩnh vực chứng khoán và thị trường chứng khoán, thẩm quyền xử phạt gồm: Chủ tịch Ủy ban Chứng khoán Nhà nước; Chánh thanh tra Ủy ban Chứng khoán Nhà nước; Trưởng đoàn thanh tra chuyên ngành của Ủy ban Chứng khoán Nhà nước; Chủ tịch Ủy ban nhân dân cấp tỉnh.</li>
  <li>B, C sai vì không bao gồm Bộ trưởng Bộ Tài chính trong danh sách này; D sai vì chỉ Chủ tịch Ủy ban nhân dân cấp tỉnh, không phải Ủy ban nhân dân các cấp.</li>
</ul>
<p class="src">Nguồn: slide 68 · Nghị định 156/2020/NĐ-CP (quy định thẩm quyền xử phạt vi phạm hành chính về chứng khoán)</p>`
  }
];
