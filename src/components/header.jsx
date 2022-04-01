import React, { Component } from 'react';
import "./header.css"

class header extends Component {
    render() {
        return (
            <div className="overlay">
                <div className="container d-flex">
                    <div className="blogTitle">
                        News <span>&</span> Insights
                    </div>
                    <div className="address text-right">
                        <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/_ngoc61/" className="mr-2"><i class="fab fa-instagram"></i></a>
                        <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100006226089162" className="mr-2 fa-sm">Ngocle</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default header;