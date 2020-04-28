import React, { Component } from 'react';
import "./post3.css"

class post3 extends Component {
    render() {
        return (
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="hovereffect3">
                    <img class="img-responsive3" src="https://www.desktopbackground.org/download/800x600/2011/11/06/292591_reagan-wallpapers-archive-ronald-reagan-presidential-foundation_2560x1440_h.jpg" alt="" />
                    <div class="overlay3">
                        <h2>Vinfast và lòng tự tôn người Việt</h2>
                        <button class="info3" data-toggle="modal" data-target="#modal3">Đọc thêm</button>
                    </div>
                </div>

                <div className="modal fade" id="modal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title " id="exampleModalLabel">VIN và nền kinh tế đáng thương của Việt Nam</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                               
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

export default post3;