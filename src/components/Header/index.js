import React, { Component } from 'react';
import "./styles.css"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href="/" className="logo"><h1 className="mh1">Thoughts OverFlow</h1></a>

            </div>
        );
    }
}

export default Header;