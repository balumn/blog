import React, { Component } from 'react';
import "./styles.css"
import Header from '../Header';
import { Link } from "react-router-dom"
import Footer from "../Footer"
class Feeds extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="topics-listing">

                    {/* 1st post preview */}
                    <Link to="/read/about-thoughts-overflow" style={{ textDecoration: 'none',color:'black' }}>
                        <div className="preview">
                            <b>About Thoughts OverFlow!</b>
                            <p className="abs"> What made me writing something on the web. </p>
                            <p className="date">Sept 28, 2019 </p>
                        </div>
                    </Link>

                    {/* 2nd post preview */}
                    {/* <div className="preview">
                        <b>How I got my driving licence ?</b>
                        <p className="abs"> Isn't there something uncommon about the driving licence tests in Kerala? </p>
                        <p className="date">Aug 7, 2019 </p>
                    </div> */}
         

                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Feeds;