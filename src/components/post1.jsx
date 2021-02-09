import React, { Component } from "react";
import "./post1.css";
class post1 extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div className="hovereffect1">
          <img
            className="img-responsive1"
            src="https://www.placesfortour.com/wp-content/uploads/2019/08/800px-Phongnhakebang6.jpg"
            alt=""
          />
          <div className="overlay1">
            <h2>QUẢNG BÌNH</h2>
            <button className="info1" data-toggle="modal" data-target="#modal1">
              Đọc thêm{" "}
            </button>
          </div>
        </div>
        {/* modal */}
        <div
          className="modal fade"
          id="modal1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title " id="exampleModalLabel">
                  THẤY GÌ, TỪ TRANG SỬ XƯA?
                </h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  Tháng 2 năm Thiên Huống Bảo Tượng thứ hai Kỷ Dậu (1069) vua Lý
                  Thánh Tông thân chinh cầm quân cùng với tướng quân Lý Thường
                  Kiệt dẫn 50 nghìn quân đánh bằng đường biển vào đến cửa Nhật
                  Lệ.Quân Chiêm không đánh nổi phải bỏ chạy vào phía trong. Quân
                  Lý Thường Kiệt vào thành đuổi bắt được Chế Cũ đưa về Thăng
                  Long. Để chuộc mạng, Chế Cũ xin dâng ba châu: Bố Chinh, Địa
                  Lý, Ma Linh (tức vùng đất của Quảng Bình và bắc Quảng Trị ngày
                  nay) cho Đại Việt. Với 3 châu này biên giới Đại Việt đã vượt
                  qua khỏi Hoành Sơn Quan (Đèo Ngang) tiến về phía Nam mở đầu
                  cho công cuộc mở cõi về phương Nam.
                </p>
                <p>
                  Coi lại thời phân tranh Đàng Trong / Đàng Ngoài (Đàng Trong
                  gồm phần lớn tỉnh Quảng Bình trở vô Nam; Đàng Ngoài chỉ có một
                  ít Quảng Bình, rồi Hà Tĩnh trở ra Bắc). Chúa Nguyễn của Đàng
                  Trong sau hơn một thế kỷ ròng rã đã mở cõi rỡ ràng tới tận mũi
                  Cà Mau!
                </p>
                <p>
                  Trước khi xuất hiện tên gọi "Nam Kỳ/ Trung Kỳ/ Bắc Kỳ", trong
                  thời phân tranh chỉ có tên gọi HAI MIỀN thôi, là: NAM (Nam hà,
                  từ phía nam sông Gianh trở vô, tức "Đàng Trong") và BẮC (Bắc
                  hà, từ phía bắc sông Gianh trở ra, tức "Đàng Ngoài"). Hơn một
                  trăm bảy mươi năm (1600-1775) chia đôi đất nước, với hai triều
                  đình khác nhau, kinh tế và nhứt là văn hóa tiến triển dị biệt
                  đã dẫn đến nhân tâm cũng dị biệt! Biến cố kết thúc cuộc phân
                  tranh Trịnh / Nguyễn, vào đầu năm 1775 khi quân Trịnh chiếm
                  được kinh đô Phú Xuân của chúa Nguyễn, tưởng là cơ hội để hàn
                  gắn sự ly tán hai miền. Dè đâu, chỉ trong vòng mươi năm cai
                  quản Phú Xuân 1775 - 1786, quân Trịnh của miền BẮC đã tận lực
                  vơ vét, cư xử tàn tệ khiến cho người dân Phú Xuân của miền NAM
                  không tin nổi nơi mắt mình: rành rành cũng là người Việt với
                  nhau, mà quân Trịnh hoạnh họe hệt như lực lượng ngoại bang
                  chiếm đóng! Lòng dân hai miền chưa kịp hàn gắn, lại bị giáng
                  một đòn chí mạng, gây chấn thương tâm lý nặng nề! (thời may
                  quân Tây Sơn vào năm 1786 đã tấn công chiếm Phú Xuân, đuổi
                  quân Trịnh trở ra ngoài Bắc)
                </p>
                <p>
                  Đất nước hợp nhứt (vua Gia Long lên ngôi năm 1802), mở ra một
                  hi vọng hàn gắn lòng dân sau đằng đẵng hai trăm năm phân ly.
                  Dè đâu, mới tám mươi năm hợp nhứt thôi, nước Việt một lần nữa
                  bị phân rã! Khi người Pháp chiếm ưu thế tuyệt đối qua Hòa ước
                  Patenotre 1884, nước Việt không phải phân đôi mà phân thành ba
                  vùng tách biệt: Tonkin, Annam, Cochinchine. Chiến tranh liên
                  miên, mà ĐỊNH MỆNH GẮN LIỀN VỚI CHIẾN TRANH LÀ SỰ NGỜ VỰC,
                  LUÔN LÀ NGỜ VỰC.
                </p>
                <p>
                  Giai đoạn 1954-1975, tiền lệ hùng cứ từng cõi riêng của giai
                  đoạn Đàng Trong / Đàng Ngoài, lại được tái lập. Cũng gọi thành
                  hai miền: NAM và BẮC. Phần lớn tỉnh Quảng Bình, trong hơn 170
                  năm (1600-1775), sống trong tâm thức thuộc về miền NAM phóng
                  khoáng (Nam hà, phía nam sông Gianh trở vô, tức "Đàng Trong").
                  Cũng Quảng Bình, trong 21 năm ngắn ngủn (1954-1975), lại trở
                  thành miền BẮC (phía bắc sông Bến Hải trở ra). Cách nào đó,
                  Quảng Bình đã trở thành "ẩn dụ của định mệnh" bất toàn và bất
                  ổn của sử nước Việt.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default post1;
