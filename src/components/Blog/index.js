import React, { Component } from 'react';
import "./blog.css"
import "./mobile.css"
class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="warning">
                    <p>
                        <b>Warning!</b>This page may contains stupidity. For the same reason I cant allow you to comment on my posts.
                        <em><a href="https://balumn.github.io"> Mayday...Mayday..!!</a></em>
                    </p>
                </div>
                <div className="home">
                    <div className="mh">
                        <h1>Thoughts OverFlow!</h1>
                        <h4>@balumn</h4>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Blog;