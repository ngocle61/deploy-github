import React, { Component } from "react";
import "./post2.css";

class post5 extends Component {
  render() {
    return (
      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div class="hovereffect2">
          <img
            class="img-responsive2"
            src="https://thumbs.dreamstime.com/b/little-cute-stylish-boy-gives-bouquet-daisies-to-his-girlfriend-blonde-girl-romantic-photo-couple-little-cute-stylish-141329913.jpg"
            alt=""
          />
          <div class="overlay2">
            <h2>Love</h2>
            <button class="info2" data-toggle="modal" data-target="#modal5">
              Đọc thêm
            </button>
          </div>
        </div>

        <div
          className="modal fade"
          id="modal5"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title " id="exampleModalLabel">
                  Dòng chảy của đồng tiền và giá trị của tình yêu.
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
                <img
                  src="https://lh3.googleusercontent.com/proxy/AAdYKdgxADcZglJxuXdhiF5SoVsaXfy07zFUgLD2_za23pOY7ghUb2R0eoAf9G1mJk1sKKk1WcpyTnqj6xbkyu7-eQBipubFL9tWhWt4_ah5cRiWxzgAC1Evpfqv-dNgFS20q4Mj_WEBWTpiN8IWMwsDFFr8cBALMx9AAHGRSMEIqzKfWkvQvBBW83tHYAulxhed8CIDzZ2RevxWkpt9WwnCizlbth6NTkYpD7qs6wgg"
                  alt=""
                  className="image"
                />
                <p style={{ paddingTop: "30px" }}>
                  Hầu như bạn hỏi bất kỳ ai, từ cô gái trẻ tuổi cho đến người
                  phụ nữ lớn tuổi là họ cần gì nhất ở một người con trai hay đàn
                  ông, câu trả lời bạn thường nhận được là "người yêu thương
                  họ". Nhưng thế nào là "yêu thương"? Có rất nhiều cách giải
                  thích khác nhau, mà theo tôi gần như mọi cách giải thích đó
                  chỉ nhằm vẽ rắn thêm chân, lừa gạt những người mới vào đời.
                </p>
                <p>
                  Con người có thể nói láo với nhau, và thường xuyên không nói
                  thật vì lợi ích của họ, nhưng hiếm ai nói dối với các khoản
                  đầu tư hay tài sản của mình. Họ có thể nói chỗ "trên núi" kia
                  an toàn, nhưng lại giấu tài sản ở "dưới biển", vậy thì thực tế
                  họ đang suy nghĩ rằng dưới biển an toàn hơn trên núi.
                </p>
                <p>
                  Trong chuyện tình cảm cũng vậy, có một thứ bản năng mà hầu như
                  phụ nữ nào cũng có. Đó là sự lượng định tình yêu của người
                  khác giới dành cho họ dựa trên mức độ chi tiêu hay chia sẻ tài
                  sản, mà người đàn ông đó sở hữu, cho họ (hoặc còn rộng hơn
                  thế, người con trai/đàn ông đó sẵn sàng vì họ mà làm những
                  điều gì). Hay nói đơn giản, "anh dám vì em mà đưa hết tài sản
                  của anh cho em thì đồng nghĩa với chuyện anh đang yêu em tuyệt
                  đối."
                </p>
                <p>
                  Nghe có vẻ thực dụng, nhưng đó là thứ bản năng ngàn xưa để nữ
                  giới biết xét đoán "sự yêu thương" từ nhân tình của mình.
                  Không hẳn chàng trai nghèo khổ sẽ luôn là kẻ thua cuộc, vì nếu
                  bạn có một con cá mà cho nàng nguyên con, dĩ nhiên nàng đối
                  với bạn còn quan trọng hơn là kẻ có mười con cá nhưng chỉ keo
                  kiệt cho nàng đúng một con duy nhất. Con người ta đôi khi hay
                  ức chế bản năng suy xét nguyên thủy của mình, có lẽ đó cũng là
                  lúc dễ vấp phải những sai lầm nhất .
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

export default post5;
