import React, { Component } from 'react';
import "./main.css"
import Post1 from './post1';
import Post2 from './post2';
import Post3 from './post3';
import Post4 from './post4';
import Post5 from './post5';
import Post6 from './post6';
import Post7 from './post7';
import Post8 from './post8';
import Post9 from './post9';


class main extends Component {
    render() {
        return (
            <div className="container d-flex flex-column align-items-center justify-content-center mt-5">
                <div className="title text-center">the truth untold </div>
                <div className="text text-center mt-3">"A nation that cannot control its border is not a nation</div>
                <div className="text-right">RONALD REAGAN</div>
                <div className="row mt-4">
                    <Post1 />
                    <Post2 />
                    <Post3/>
                    <Post4/>
                    <Post5/>
                    <Post5/>
                    <Post5/>
                    <Post5/>
                    <Post5/>
                    <Post5/>
                    <Post5/>
                    <Post5/>
                    {/* <Post6/>
                    <Post7/>
                    <Post8/>
                    <Post9/> */}
                </div>
                <div className="underline"></div>
            </div>
        );
    }
}

export default main;