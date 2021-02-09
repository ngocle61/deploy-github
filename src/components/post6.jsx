import React, { Component } from "react";
import "./post3.css";

class post6 extends Component {
  render() {
    return (
      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div class="hovereffect3">
          <img
            class="img-responsive3"
            src="https://www.marry.vn/images/detailed/272/Tet-Co-truyen.jpg"
            alt=""
          />
          <div class="overlay3">
            <h2>Tết</h2>
            <button class="info3" data-toggle="modal" data-target="#modal6">
              Đọc thêm
            </button>
          </div>
        </div>

        <div
          className="modal fade"
          id="modal6"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title " id="exampleModalLabel">
                  Tết Ta khác với Tết Tầu, người ơi!
                </h5>
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
                <img
                  src="https://vcdn-giaitri.vnecdn.net/2020/09/10/cha-va-con-6363-1599731616.jpg"
                  alt=""
                />
                <p style={{ paddingTop: "30px" }}>
                  Ngày tết của dân tộc Việt Nam ta đã có từ rất lâu rồi . Từ hơn
                  4000 năm về trước .Từ thời vua Hùng lịch sử đã ghi lại như thế
                  . Những câu chuyện đã được truyền tai nhau cho tới tận bây
                  giờ. Mà tiêu biểu nhất là "Sự tích bách chưng bánh dày (Lang
                  liêu)" . Trong truyện Bánh giày (tròn ) tượng trưng cho mặt
                  trời , bánh chưng thì vuông ở trong có nhân tượng trưng cho
                  đất . Văn hóa đông á thuộc ta về văn minh nông nghiệp lúa nước
                  , do nhu cầu canh tác đã phân chia thời gian trong năm thành
                  24 tiết khí khác nhau (và ứng với mỗi tiết này có một thời
                  khắc "giao thừa") trong đó tiết quan trọng nhất là tiết khởi
                  đầu của một chu kỳ canh tác, gieo trồng, tức là Tiết Nguyên
                  Đán. Sau này được biết đến là Tết Nguyên Đán.
                </p>
                <p>
                  Còn theo lịch sử Trung hoa tết nguyên đán đã có từ thời tam
                  hoàng ngũ đế (Hạ - Thương - Chu) .Các vua chúa ngày đó quan
                  niệm ngày giờ về tạo thiên lập địa như sau: giờ tý thì có trời
                  - giờ sửa thì có đất - giờ dần sinh ra loài người . cũng từ đó
                  quy định về tháng tết khác nhau. Nhà Hạ lấy tháng giêng (
                  tháng dần) làm đầu năm . Nhà Thương lấy tháng chạp ( tháng sửu
                  ) còn đến thời nhà Chu thì chọn tháng tý (tháng 11) làm tháng
                  tết . Sau này vào thời của Tần Thủy Hoàng đế thì đổi sáng
                  tháng hợi (10) . Rồi đến thời nhà Hán ,Hán Vũ Đế lại đặt ngày
                  tết vào tháng dần . Từ đó về sau các triều đại về sau không ai
                  sửa lại lịch ngày tết nữa .
                </p>
                <p>
                  Trong cuốn sách viết về Giao Chỉ của người Trung Hoa .Khổng tử
                  có viết "ta ko biết tết là gì nghe đâu đó là lễ hội lớn của
                  bọn người man chúng nhảy múa như điên uống rượu và ăn chơi vào
                  ngày đó" . Cũng có sách viết "bọn người ở Giao quận thường tập
                  trung lại thành từng phường hội nhảy múa hát ca , ăn uống chơi
                  bời trong nhiều người để vui mừng 1 mùa cấy trồng mới và chúng
                  nó ko chỉ có dân làm nông mà còn có người nhà của quan lang
                  cũng tham gia. và chỉ có bọn man di mà người trên kẻ dưới cùng
                  nhau nhảy múa như cuồng vậy . Bên ta ko có vua - quân điên đảo
                  như thế " .
                </p>
                <p>
                  Vì vậy nếu nhìn nhận lại và làm phép so sánh dân ta đã ăn tết
                  trước 1000 năm Bắc thuộc .Sau này năm 221 trước tây lịch, 1 số
                  phong tục ở phương Bắc du nhập vào Việt Nam khi Tần Thủy Hoàng
                  bắt đầu công cuộc viễn chinh xâm lược . Một số nho giáo hay
                  những người làm sử quy chụp Tết Ta bắt nguồn từ bên Trung Hoa.
                  . Tôi chửi chúng nó , chửi luôn cha bọn khốn đó.
                </p>
                <p>
                  Sự tương đồng được sinh ra bởi ảnh hưởng lẫn nhau giữa Tết Ta
                  và Tết Tàu .Mặc dù vậy 2 quốc gia vẫn có những đặc trưng riêng
                  của ngày Tết. Và các Bạn phải nhớ lấy điều này .
                </p>
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
      </div>
    );
  }
}

export default post6;
