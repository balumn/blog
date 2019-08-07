import React, { Component } from 'react';
import "./styles.css"


class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href="/" className="logo"><h1 className="mh1">Thoughts OverFlow!</h1></a>
                <h2 className="power"><a href="https://balumn.github.io" target="_blank" rel="noopener noreferrer"><img src="avatar.png" width="75" alt="@balumn" /></a></h2>
            </div>
        );
    }
}

export default Header;