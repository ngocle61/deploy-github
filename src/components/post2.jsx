import React, { Component } from 'react';
import "./post2.css"

class post2 extends Component {
    render() {
        return (
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="hovereffect2">
                    <img class="img-responsive2" src="https://media.kenh9.tv/http/1200x1200/tinhhoa.net-rdR1Hm-nhung-dieu-chua-biet-ve-tong-thong-my-ronald-reagan.jpg" alt="" />
                    <div class="overlay2">
                        <h2>Phản biện các luận điểm của Karl Marx</h2>
                        <button class="info2" data-toggle="modal" data-target="#modal2">Đọc thêm</button>
                    </div>
                </div>

                <div className="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title " id="exampleModalLabel">as</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                               
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

export default post2;