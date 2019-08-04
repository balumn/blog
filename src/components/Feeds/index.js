import React, { Component } from 'react';
import "./styles.css"
import Header from '../Header';
class Feeds extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="topics-listing">
                    <ul>
                        <li>Types of friends I have.</li>
                        <li>How to pass B.Tech exams</li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default Feeds;