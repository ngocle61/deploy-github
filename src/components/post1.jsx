import React, { Component } from 'react';
import "./post1.css"

class post1 extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="hovereffect1">
                    <img className="img-responsive1" src="https://www.desktopbackground.org/download/800x600/2011/11/06/292720_ronald-reagan-render-by-kernelpanicx-on-deviantart_900x640_h.png" alt="" />
                    <div className="overlay1">
                        <h2>Lời nói đầu</h2>
                        <button className="info1" data-toggle="modal" data-target="#modal1">Đọc thêm</button>
                    </div>
                </div>
                {/* modal */}
                <div className="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title " id="exampleModalLabel">Đôi lời về  </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>
                                  Ngay từ những ngày đầu tiên bắt đầu vào việc học lập trình tôi đã mong muốn có thể tự tay tạo cho mình một website nhỏ
                                để viết ra thành chữ các quan điểm của bản thân đã học và quan sát được.Có thể không nhiều nhưng tôi tin tôi có thể
                                cho bạn thấy một cái nhìn về hiện thực xã hội Việt Nam hiện tại .
                                </p>
                                <p>
                                Nếu bạn đọc hết Lời mở đầu này bạn chắc chắn sẽ hiểu được lý do và mục đích của trang viết news & insights .
                                Dễ thấy rằng chính trị xa rời trong cuộc sống thường ngày của người dân Việt Nam . Bạn cứ nhìn vào việc bầu cử .
                                 Nó không xa lạ , nó cũng không mới mẻ nhưng mà người dân họ chẳng mặn mà bao nhiêu 
                                với lá phiếu của họ ."Đây là chuyện không thể kiểm soát" - họ nghĩ vậy . Đáng lẽ ra họ ... không nên nghĩ vậy .
                                Nói đúng hơn chúng ta đều có quyền bầu cử cho người ta tin tưởng, đứng ra đại diện bảo vệ lợi ích của người dân.
                                Nhưng hình như mô hình xã hội hiện tại không cho phép ta làm được điều đó .
                                 </p>
                                 <p>
                                 Nhà của tôi ở hiện tại là một vùng nông thôn sát thành thị , đi khoảng 6 km thì xuống được trung tâm thành phố . Người dân ở xung quanh 
                                 đây có một câu nói rất dân quê " mình ăn rau muống thì đừng nói chuyện chính trị nghe con" . Các bạn đọc đây trả lời tôi . Bây giờ ăn gì thì 
                                 nói chuyện chính trị được hè ? . Khi tôi nói các bạn nên quan tâm hơn về chính trị thì điều đó cũng chẳng phải tôi yêu cầu bạn phải làm một thứ 
                                 gì đó lớn lao và vượt quá tầm với của bạn . Điều tôi cần và tha thiết nhất đó chỉ là các bạn nên để ý về cách phản ứng của các Đảng viên nhà nước.
                                 Tôi thấy rằng rõ là chúng ta đang nộp thuế cho họ trong mọi hoạt động . Nó thậm chí là nhiều khoản thuế cao ngất ngưỡng . Điều này cho phép rằng cuộc sống 
                                 và hoạt động của người dân phải được đảm bảo nhất có thể . Nhưng bạn thấy đó sự phản ứng chậm chạm của mấy anh công an khi dân đen có tranh chấp vũ lực
                                 làm tôi phải đặt câu hỏi rằng liệu rằng có phải chúng ta đang nộp thuế quá ít ? Hay là đơn giản chỉ là vì sự chậm chạp thiếu trách nhiệm . Tôi không thích công an 
                                , những đồng lương cuối tháng của họ là từ thuế của chúng ta và họ không biết điều đó .Một lũ vô ơn , thiếu trách nhiệm và tham lam .Họ còn chẳng ý thức được 
                                họ là những người giữ gìn trật tự xã hội . <br/>
                                    <br/>
                                 Tuy vậy tôi lại có một cảm tình sâu sắc với các anh quân nhân bộ đội Việt Nam . Họ trung thành tuyệt đối với nhà nước , điều này rất tuyệt , quân đội thì 
                                 phải như vậy mới được .  Họ luôn cố gắng làm tròn bổn phận nơi biên giới hải đảo tổ quốc . Nhưng những người gửi họ ra làm các nhiệm vụ nguy hiểm và sóng còn 
                                 ấy lại không cho họ quyền được tự ý nổ súng vì cái ngoại giao vớ vẩn gì đó . Chúng ta có võ khí quân sự tuy không mạnh nhưng là đủ . Ngoài ra chúng ta cũng 
                                 có quân đội  . Điều này cho phép rằng ngư dân có thể an toàn bám biển . Các chiến sĩ sẽ bảo vệ cho người dân và tôi biết điều đó . Cứ nhìn vào cái cách dân kể  
                                 chuyện về các anh bộ đội là hiểu .Chúng ta thiếu đi những nhà lãnh đạo cứng rắn . Điều này làm cho quân đội Việt Nam luôn bị đặt vào 
                                giưã làn ranh . Hoặc trung với Đảng hoặc hiếu với dân . 
                                 </p>
                                 <p>
                                    Càng ngày tôi càng thấy có một giai cấp ở trên nắm toàn bộ quyền lực nhưng họ lại thờ ơ với an nguy của người dân và quốc gia .Thứ nhất là họ không làm tròn nhiệm vụ. 
                                    Còn thứ hai là họ đi ngược lại với lý tưởng của họ , lý tưởng về XHCN (mọi người dân đều như nhau). Họ tạo ra quyền lực cho họ và nghiễm nhiên công nhận nó 
                                    bắt người dân phải coi họ là bề trên . Lí lẽ của tự nhiên là luôn có bất công và sự chênh lệnh . Cho nên mới nói cái đường đi lâu dài của nhà nước ta nó sai ,
                                    sai ngay từ đầu rồi . Sự phân hóa giai cấp là sẽ có vì năng lực của mỗi người là khác nhau . Bởi vậy các bạn hãy ngẫm thử xem mình đã bị toàn trị và bị lừa dối 
                                    bởi báo chí như thế nào . Ngày xưa ấy , cái thời mà quân chủ chuyên chế trên bảo dưới nghe ấy thì còn chấp nhận được . Vì thông tin lúc đó có thể bị kiểm soát 
                                    và thay đổi bởi vua chúa . Còn bây giờ thì sao thời đại internet tốc độ cao thế mà vẫn tin vào báo Đảng vẫn tin vào những tiên đề của marx Lê-nin . Mịt mù thông tin và vô cảm.
                                    Ngu , ngu lắm ( ngu chứ không phải dốt). Ngu trong chuyện suy luận một vấn đề nào đó . Tôi bị chỉ trích nhiều về chuyện này 
                                    . Rồi tôi cũng sẽ có lúc thất vọng khi kỳ vọng người khác sẽ không hơn . Nhưng làm sao có thể bỏ qua được khi đất nước Việt Nam hiện tại 
                                    quá tệ hại ?
                                 </p>
                                 <p>
                                  </p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default post1;