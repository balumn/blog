import React, { Component } from 'react';
import "./blog.css"
import "./mobile.css"
class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="warning">
                    <p>
                        <b>Warning!</b>This page may contains stupidity. For the same reason I cant allow you to comment on my posts.
                        <em><a href="https://balumn.github.io"> Abandon Ship!</a></em>
                    </p>
                </div>
                <div className="home">
                    <div className="mh">
                        <h1>Thoughts OverFlow!</h1>
                        <h4><a href="https://balumn.github.io" target="_blank">@balumn</a></h4>
                    </div>
                    <button className="button">BLOG</button>
                    <ul className="social">
                        <li key="email">
                            <a href="mailto:balumn@ieee.org" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i></a>
                        </li>
                        <li key="github">
                            <a href="http://github.com/balumn" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                        </li>
                        <li key="linkedin">
                            <a href="https://www.linkedin.com/in/balumn/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                        </li>
                        <li key="stackOverflow">
                            <a href="https://stackoverflow.com/cv/balumn" target="_blank" rel="noopener noreferrer"><i className="fa fa-stack-overflow"></i></a>
                        </li>
                        <li key="instagram">
                            <a href="https://www.instagram.com/the_hungry_chef_" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                        </li>
                        <li key="fb">
                            <a href="https://www.fb.me/balu.m.nandakumar" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default Blog;