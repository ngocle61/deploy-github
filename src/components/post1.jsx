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
                        <h2>Hoàng Sa - Trường Sa</h2>
                        <button className="info1" data-toggle="modal" data-target="#modal1">Đọc thêm </button>
                    </div>
                </div>
                {/* modal */}
                <div className="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title " id="exampleModalLabel">
                                    LỊCH SỬ CŨNG CÓ TIẾNG NÓI CỦA RIÊNG MÌNH
                                </h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h4 className="text-center"> "A nation that cannot control its border is not a nation</h4>
                                <h6 className="text-right textRonald">Ronald Reagan</h6>

                            </div>
                            <div className="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default post1;