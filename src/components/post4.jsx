import React, { Component } from 'react';
import "./post4.css"

class post4 extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="hovereffect4">
                    <img className="img-responsive4" src="https://i.insider.com/55253d0569bedd781e3a96f2?width=1100&format=jpeg&auto=webp" alt="" />
                    <div className="overlay4">
                        <h2>Hover effect 4</h2>
                        <button className="info4" href="#">link here</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default post4;