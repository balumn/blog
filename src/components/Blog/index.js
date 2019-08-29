import React, { Component } from 'react';
import "./blog.css"
import "./mobile.css"
import "./tab.css"
// fa-fa
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";


class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
          bgColor: "#fcfa53"
        }
      }
      
      myColors = ['#ffe28c','#d4c396','#7da130','#1a999c',"#fcfa53", '#c6ff8c', '#8cffa3', '#8cfff9', '#cf99ff', '#ff99ee', '#8fff5e', '#fffc5e', '#5ebcff'];
      
      newColorFun = () => {
          return(this.myColors[Math.floor(Math.random() * this.myColors.length)]);
      }

      taDaaa = (e) => {
        this.setState({
          bgColor: this.newColorFun()
        })
      }

    render() {
        return (
            <React.Fragment >
                <div className="blog" style={{backgroundColor: this.state.bgColor}} onClick={this.taDaaa}>
                    <div className="warning">
                        <p>
                            <b>Warning!</b>This page may contain stupidity.
                        </p>
                    </div>
                    <div className="home">
                        <div className="mh">
                            <h1>Thoughts OverFlow!</h1>
                            <h4><a href="https://balumn.github.io" target="_blank" rel="noopener noreferrer">@balumn</a></h4>
                        </div>
                        <button className="button"><Link to="/read" style={{ textDecoration: 'none',color:'black' }}>BLOG</Link></button>
                        <div className="quote">
                            <em>“There is no greater agony than bearing an untold story inside you.”</em>
                            <p>- Maya Angelou</p>
                        </div>
                        <div className="soc-panel">
                            <ul className="social">
                                <li key="email">
                                    <a href="mailto:balumn@ieee.org" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope}   size="2x"/></a>
                                </li>
                                <li key="github">
                                    <a href="https://github.com/balumn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}  size="2x" /></a>
                                </li>
                                <li key="linkedin">
                                    <a href="https://www.linkedin.com/in/balumn/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}  size="2x" /></a>
                                </li>
                                <li key="stackOverflow">
                                    <a href="https://stackoverflow.com/cv/balumn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faStackOverflow}   size="2x"/></a>
                                </li>
                                <li key="instagram">
                                    <a href="https://www.instagram.com/the_hungry_chef_" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}   size="2x"/></a>
                                </li>
                                <li key="fb">
                                    <a href="https://www.fb.me/balu.m.nandakumar" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook}   size="2x"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Blog;