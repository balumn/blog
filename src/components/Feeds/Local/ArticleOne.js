import React, { Component } from 'react';
import Footer from '../../Footer';
import Header from '../../Header';
import HeadingOne from '../../HeadingOne';
import "./styles.css"

class One extends Component{
    Heading = {
        title: "About Thoughts OverFlow"
    };
    render(){
        return(
            <React.Fragment>
                <Header />
                    <HeadingOne data={this.Heading} />
                    <div className="content">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default One;