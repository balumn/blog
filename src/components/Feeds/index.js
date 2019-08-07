import React, { Component } from 'react';
import "./styles.css"
import Header from '../Header';
class Feeds extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="topics-listing">

                    {/* 1st post preview */}
                    <div className="preview">
                        <b>About Thoughts OverFlow!</b>
                        <p className="abs"> What made me writing something on the web. </p>
                        <p className="date">Aug 7, 2019 </p>
                    </div>

                    {/* 2nd post preview */}
                    <div className="preview">
                        <b>How I got my driving licence ?</b>
                        <p className="abs"> Isn't there something uncommon about the driving licence tests in Kerala? </p>
                        <p className="date">Aug 7, 2019 </p>
                    </div>
         
                    {/* 2nd post preview */}
                    <div className="preview">
                        <b>How I got my driving licence ?</b>
                        <p className="abs"> Isn't there something uncommon about the driving licence tests in Kerala? </p>
                        <p className="date">Aug 7, 2019 </p>
                    </div>
                    
                    {/* 2nd post preview */}
                    <div className="preview">
                        <b>How I got my driving licence ?</b>
                        <p className="abs"> Isn't there something uncommon about the driving licence tests in Kerala? </p>
                        <p className="date">Aug 7, 2019 </p>
                    </div>           


                </div>
            </React.Fragment>
        );
    }
}

export default Feeds;