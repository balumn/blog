import React, { Component } from 'react';
import "./styles.css"
import Header from '../Header';
class Feeds extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="topics-listing">
                    <div className="preview">

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Feeds;