import React, { Component } from 'react';
import "./blog.css"
import "./mobile.css"
// fa-fa
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="warning">
                    <p>
                        <b>Warning!</b>This page may contain stupidity. For the same reason I cant allow you to comment on my posts.
                        <em><a href="https://balumn.github.io"> Abandon Ship!</a></em>
                    </p>
                </div>
                <div className="home">
                    <div className="mh">
                        <h1>Thoughts OverFlow!</h1>
                        <h4><a href="https://balumn.github.io" target="_blank" rel="noopener noreferrer">@balumn</a></h4>
                    </div>
                    <button className="button">BLOG</button>
                    <div className="quote">
                        <em>“There is no greater agony than bearing an untold story inside you.”</em>
                        <p>- Maya Angelou</p>
                    </div>
                    <div className="soc-panel">
                        <ul className="social">
                            <li key="email">
                                <a href="mailto:balumn@ieee.org" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} color="black"  size="2x"/></a>
                            </li>
                            <li key="github">
                                <a href="http://github.com/balumn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} color="black" size="2x" /></a>
                            </li>
                            <li key="linkedin">
                                <a href="https://www.linkedin.com/in/balumn/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} color="black" size="2x" /></a>
                            </li>
                            <li key="stackOverflow">
                                <a href="https://stackoverflow.com/cv/balumn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faStackOverflow} color="black"  size="2x"/></a>
                            </li>
                            <li key="instagram">
                                <a href="https://www.instagram.com/the_hungry_chef_" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} color="black"  size="2x"/></a>
                            </li>
                            <li key="fb">
                                <a href="https://www.fb.me/balu.m.nandakumar" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} color="black"  size="2x"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Blog;