import React, { Component } from 'react';
import Footer from '../../Footer';
import Header from '../../Header';

class One extends Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                Hello World
                <Footer />
            </React.Fragment>
        );
    }
}

export default One;