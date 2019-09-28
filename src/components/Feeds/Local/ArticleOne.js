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
                        <p> It says that, one should consume books to write one. That makes me a <e>not-a-writer</e>. I dont even write diary daily. Yet I like to open up a little. My thoughts, experiences, and so on. You can expect personal as well as technical writings. 
                            <br /> It's been a while since I have this urge to write something. After all, it isn't a big deal right? Elon Musk founded ZIP2 at this age, then why couldn't I start writing a blog ?
                            <br /> As a responsible author, I should warn you about my irresponsiblity in grammatical and spelling mistakes. I may use some malayalam words in between, hope you wouldn't mind. 
                        </p>
                    </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default One;