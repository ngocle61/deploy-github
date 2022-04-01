import React, { Component } from 'react';
import "./main.css"
import Post1 from './post1';
import Post2 from './post2';
import Post3 from './post3';
import Post4 from './post4';
import Post5 from './post5';
import Post6 from './post6';
import Post7 from './post7';
class main extends Component {
    render() {
        return (
            <div className="container d-flex flex-column align-items-center justify-content-center pt-5 pt-md-0 main">
                {/* <div className="title text-center">the truth untold </div> */}
                <div className="text text-center">"Any fool can know. The point is to understand.</div>
                <div className="text-right">Albert Einstein</div>
                <div className="row pt-5">
                    <Post4/>
                    <Post5/>
                    <Post6/>
                    <Post1 />
                    <Post3/>
                    {/* <Post2 /> */}
                    <Post7 />
                </div>
                
                <div className="text-right">Enjoy reading my posts</div>
                <div className="underline"></div>
            </div>
        )
    }
}

export default main;