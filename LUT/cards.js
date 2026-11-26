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
  <li><strong>c đúng:</strong> Điều 1 Luật Chứng khoán 2019 quy định về chào bán chứng khoán ra công chúng; chào bán, phát hành chứng khoán của công ty đại chúng.</li>
  <li><strong>a sai:</strong> việc thành lập, tổ chức và hoạt động của doanh nghiệp (kể cả công ty đại chúng) do Luật Doanh nghiệp điều chỉnh; Luật Chứng khoán chỉ điều chỉnh các nội dung chuyên ngành về công ty đại chúng (điều kiện trở thành, đăng ký, quyền và nghĩa vụ, quản trị công ty đại chúng).</li>
  <li><strong>b sai:</strong> không phải “tất cả” — chào bán riêng lẻ của tổ chức phát hành không phải công ty đại chúng thực hiện theo Luật Doanh nghiệp (Điều 30 Luật Chứng khoán dẫn chiếu).</li>
</ul>
<p class="src">Nguồn: slide 47 · Luật Chứng khoán 2019 (Điều 1; Điều 30)</p>`
  }
];
