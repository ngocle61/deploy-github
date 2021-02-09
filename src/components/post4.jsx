import React, { Component } from "react";
import "./post1.css";
class post4 extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div className="hovereffect1">
          <img
            className="img-responsive1"
            src="https://thumbs.dreamstime.com/b/digit-seven-number-black-color-digit-seven-number-black-color-maths-count-font-text-149596257.jpg"
            alt=""
          />
          <div className="overlay1">
            <h2>7 , 2 , 10</h2>
            <button className="info1" data-toggle="modal" data-target="#modal4">
              Đọc thêm{" "}
            </button>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal4"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title " id="exampleModalLabel"></h4>
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
                  src="https://www.thesun.co.uk/wp-content/uploads/2020/10/6f4f589f4b86d3db4eb588875f51bb69.jpg"
                  alt=""
                />
                <p style={{ paddingTop: "30px" }}>
                  7 điểm, dĩ nhiên không được như 10 điểm, và trong 3 điểm
                  khoảng cách kia, người ta có thể liệt kê ra tùm lum chuyện
                  không được của 7 điểm. Nhưng 7 điểm vẫn tốt hơn chán so với 2
                  điểm. Nếu bạn nhìn vào chuyện 7 điểm và 2 điểm đều thua xa 10
                  điểm, và gọi chúng chung một kiểu thì bạn lầm nặng. Có những
                  sai lầm chẳng sao, ví dụ cái bánh 7 điểm và cái bánh 2 điểm,
                  ăn nhầm chẳng chết ai.
                </p>
                <p>
                  Nhưng nếu đó là sai lầm về suy nghĩ, hay nhận thức tầm cao
                  hơn, và mình lại tin chính cái suy nghĩ sai lầm đó, như doanh
                  nghiệp 7 điểm, ồ cũng như doanh nghiệp 2 điểm, hay lớn hơn như
                  quốc gia 7 điểm, ồ cũng như quốc gia 2 điểm. Thì đôi khi bạn
                  đang đánh cược chính cuộc đời mình để rồi xác suất cao là thua
                  bạc và khát nước, không lối thoát.
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

export default post4;
