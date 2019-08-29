import React, { Component } from 'react';
import "./styles.css"
class HeadingOne extends Component {
    render() {
        const { title } = this.props.data;
        return (
            <h1 className="title1">{title}</h1>
        );
    }
}

export default HeadingOne;