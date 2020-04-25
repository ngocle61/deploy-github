import React, { Component } from 'react';
import "./post1.css"
class post1 extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="hovereffect1">
                    <img className="img-responsive1" src="https://www.desktopbackground.org/download/800x600/2011/11/06/292591_reagan-wallpapers-archive-ronald-reagan-presidential-foundation_2560x1440_h.jpg
" alt="" />
                    <div className="overlay1">
                        <h2>Lời nói đầu</h2>
                        <button className="info1" data-toggle="modal" data-target="#modal1">Đọc thêm </button>
                    </div>
                </div>
                {/* modal */}
                <div className="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title " id="exampleModalLabel">Mở lời cùng những điều chưa hài lòng ... </h5>
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
                                Nhà của tôi ở hiện tại là một vùng nông thôn sát thành thị , đi khoảng 6 km thì xuống được trung tâm thành phố . Người dân ở xung quanh 
                                đây có một câu nói rất dân quê " mình ăn rau muống thì đừng nói chuyện chính trị nghe con" . Các bạn đọc đây trả lời tôi . Bây giờ phải ăn gì 
                                mới được nói ? <br/>
                                Chuyện xa rời chính trị là một điều đáng buồn . Buồn hơn khi người ta còn coi đây là vấn đề nhạy cảm . Họ coi những thứ như cải cách , phúc lợi 
                                 , những người đại diện cho họ là nhạy cảm . Vậy đó !!! <br/>
                                Từ bao giờ mà lá phiếu của người dân trở thành vô hại như thế này . Vì vô hại nên cũng chẳng ai mặn mà mà đi bầu cử . 
                                Như vậy thì đảng viên khỏi sợ dân . Dân đông cũng đếch sợ . Vậy đó !!! <br/>
                                Tự hỏi xem những điều này là do người dân hay là do mô hình xã hội chủ nghĩa trật bánh ? Chắc chắn là do người dân rồi .
                                Mô hình XHCN làm gì có bánh mà trật bạn ơi . Kể cả khi nếu mà có bánh , khi trật họ cũng dùng tiền thuế của ta để xây một con đường mới 
                                giúp cho cái bánh trật của họ chạy ngon lành .
                                </p>
                                 <p>
                                Khi tôi nói các bạn nên quan tâm hơn về chính trị thì điều đó cũng chẳng phải tôi yêu cầu bạn phải làm một thứ 
                                 gì đó lớn lao và vượt quá tầm với của bạn . Điều tôi cần và tha thiết nhất đó chỉ là các bạn nên để ý về cách phản ứng của các Đảng viên nhà nước.
                                 Tôi thấy rằng rõ là chúng ta đang nộp thuế cho họ trong mọi hoạt động . Nó thậm chí là nhiều khoản thuế cao ngất ngưỡng . Điều này cho phép rằng cuộc sống 
                                 và hoạt động của người dân phải được đảm bảo nhất có thể . Nhưng bạn thấy đó sự phản ứng chậm chạm của mấy anh công an khi dân đen có tranh chấp vũ lực
                                 làm tôi phải đặt câu hỏi rằng liệu rằng có phải chúng ta đang nộp thuế quá ít ? Hay là đơn giản chỉ là vì sự chậm chạp thiếu trách nhiệm . Tôi không thích công an 
                                , những đồng lương cuối tháng của họ là từ thuế của chúng ta và họ không biết điều đó .Một lũ vô ơn , thiếu trách nhiệm và tham lam .Họ còn chẳng ý thức được 
                                họ là những người giữ gìn trật tự xã hội . <br/>
                                 <br/>
                                 Tuy vậy quân nhân bộ đội thì lại khác . Họ trung thành tuyệt đối với nhà nước , điều này rất tuyệt , quân đội thì 
                                 phải như vậy mới được .  Họ luôn cố gắng làm tròn bổn phận nơi biên giới hải đảo tổ quốc . Nhưng những người gửi họ ra làm các nhiệm vụ nguy hiểm và sóng còn 
                                 ấy lại không cho họ quyền được tự ý nổ súng vì cái ngoại giao vớ vẩn gì đó . Chúng ta có quân đội và điều này không phải để khuyến khích chiến tranh . 
                                 Điều này có nghĩa rằng ngư dân có thể an toàn tự do bám biển và nếu có biến cố trên đại dương các chiến sĩ sẽ bảo vệ cho người dân và tôi biết điều đó .
                                  Cứ nhìn vào cách mà người dân dành tình cảm cho các anh bộ đội là hiểu . cái chúng ta thiếu là những nhà lãnh đạo cứng rắn . Điều này làm cho quân đội Việt Nam luôn bị đặt vào 
                                giưã làn ranh hoặc trung với Đảng hoặc hiếu với dân . 
                                 </p>
                                 <p>
                                    Giai cấp ở trên nắm toàn bộ quyền lực nhưng họ lại thờ ơ với an nguy của người dân và quốc gia .Thứ nhất là họ không làm tròn nhiệm vụ. 
                                    Còn thứ hai là họ đi ngược lại với lý tưởng của họ , lý tưởng về XHCN (mọi người dân đều như nhau). Họ tạo ra quyền lực cho họ và nghiễm nhiên công nhận nó 
                                    bắt người dân phải coi họ là bề trên . Lí lẽ của tự nhiên là luôn có bất công và sự chênh lệnh . Cho nên mới nói cái đường đi lâu dài của nhà nước ta nó sai ,
                                    sai ngay từ đầu rồi . Sự phân hóa giai cấp là sẽ có vì năng lực của mỗi người là khác nhau . Bởi vậy các bạn hãy ngẫm thử xem mình đã bị toàn trị và bị lừa dối 
                                    bởi báo chí như thế nào . Ngày xưa ấy , cái thời mà quân chủ chuyên chế trên bảo dưới nghe ấy thì còn chấp nhận được . Vì thông tin lúc đó có thể bị kiểm soát 
                                    và thay đổi bởi bộ phận có quyền lực . Còn bây giờ thì sao thời đại internet tốc độ cao thế mà vẫn tin vào báo Đảng vẫn tin vào những tiên đề của marx Lê-nin mịt mù thông tin thì đúng là 
                                    ngu , quá ngu( ngu chứ không phải dốt). Ngu trong chuyện suy luận một vấn đề nào đó . Tôi bị chỉ trích nhiều về chuyện này 
                                    . Rồi tôi cũng sẽ có lúc thất vọng khi kỳ vọng người khác sẽ khôn hơn . Nhưng làm sao có thể bỏ qua được khi đất nước Việt Nam hiện tại 
                                    quá tệ hại ?
                                 </p>
                                 <p>
                                    Nhớ lại hồi giặc Nguyên-mông qua đánh nước ta . Vua hỏi Trần Hưng Đạo có nên hàng không . Hưng Đạo Vương thưa "Muốn hàng thì hãy chém đầu thần rồi hẵng hàng".
                                    Dân An Nam ta đã từng như vậy đấy . Ta đã từng có những lãnh đạo như thế . Vậy mà bây giờ ... <br/>
                                  </p>
                                  <p>
                                  Bạn đọc đến đây thì chắc đã hiểu phần nào lý do và mục đích của trang viết News & Insights . Tôi khuyên các bạn khi tiếp thu thông tin từ báo chí truyền thông Việt 
                                  Nam tốt hơn hết là kiểm chứng trước rồi hẵng tin . Kiểm chứng thì có nhiều cách lắm , báo nước ngoài chẳng hạn . Báo nước ngoài chưa chắc đã là 100% đúng nhưng xem 
                                  thông tin từ hai chiều giúp bạn có cái nhìn khách quan hơn . Non sông nấm vóc này là của chúng ta và bạn phải chiến đấu cho điều đó . Đừng để một ngày đẹp trời 
                                  thằng anh ở trên hỏi xuống " máu và danh dự chúng mày muốn mất cái nào trước ?". 
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