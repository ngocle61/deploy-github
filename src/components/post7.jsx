import React, { Component } from "react";
import "./post1.css";
class post7 extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div className="hovereffect1">
          <img
            className="img-responsive1"
            src="https://i.pinimg.com/originals/49/bf/bd/49bfbd2aa4ab5a6f641f10e047b2ce9c.jpg"
            alt=""
          />
          <div className="overlay1">
            {/* <h2>Kết quả</h2> */}
            <button className="info1" data-toggle="modal" data-target="#modal7">
              Đọc 
            </button>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal7"
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
                  src="https://www.tvinsider.com/wp-content/uploads/2018/11/DSCF2309_v2-1181248.jpg"
                  alt=""
                />
                {/* <p style={{ paddingTop: "30px" }}>
                </p> */}
                <p style={{ paddingTop: "30px" }}>
                 Thú thật mình vào đời khá sớm nên mình biết tiền rất là quan trọng, tuy không phải là quan trọng nhất, nhưng nó giải quyết được rất nhiều vấn đề. Kiếm được tiền là một hành trình rất vĩ đại, vì mình unlock được rất nhiều hiểu biết và khả năng trên con đường đó. Mình cũng nhìn thấy được phẩm chất của bản thân mình, có sẵn sàng vì cầm tiền mà thỏa hiệp đạo đức hay không, từ đó biết mà trau dồi. 
                </p>
                <p>Mình nhận ra những điều này từ khá sớm nên rất cố gắng để cả thiện bản thân .Thấm thoát cũng 2 năm bước chân vào cái nghề này. Càng học thấy càng ngu. Biết thế nên đêm nào cũng cố gắng ngồi với mấy quyến sách chuyên ngành vài ba chục phút. Buồn ngủ thì lướt facebook hoặc xem youtube cho tỉnh. Khổ cái từ hồi chuyển nhà về ở với thằng bạn chí cốt thì lại có những cuộc gặp gỡ mới . Thằng bạn mình cứ đi kiếm đâu ra info của mấy em nữ giới đẹp xinh. Thế là mình add fr nàng. Nàng không đẹp nhưng lại có nét hiền hoà thu hút khó tả. Mình cũng tò mò lắm muốn xem cái nét khả ái kia ngoài đời ra thế nào . Thế mà ba lần gặp nhau mình chỉ thấy mỗi cặp mắt và hai cái tai. Hôm nay mạnh dạn rủ nàng đi ăn lẩu. Mất đâu đó khoảng 1 tiếng cho nàng suy nghĩ nhưng kết quả giống như mình dự đoán. Chỉ là muốn confirm lại để cho chắc chắn. Cũng khá vui nhưng thật bất lịch sự khi cứ cố gắng bắt chuyện trong khi nàng đã khéo léo từ chối 2 lần.</p>
                <p>
                    Thế là mình biết mình lại phải học từ cái cách giao tiếp cho đến cách nhắn tin với những 'nàng' sau này.
                </p>
                <p>
                    Cuối tuần mình nhận được tin vui từ công việc nhưng hôm nay biết là những niềm vui đó sẽ không có bóng hồng nào ở bên để chia sẽ cùng mình . Dù gì vẫn phải tập trung vào bản thân trước. 
                   
                </p>
                <p>
                Bí mật cuộc đời là ở chỗ, nhờ nhìn ra tất cả những sự tiêu cực trong đời này, cảm giác tích cực xuất hiện trong lòng người ta mới vững vàng. 
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

export default post7;
