import React, {Component} from "react";
import "./footer.css"

class Footer extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="foot">
                    <p><a href="https://www.copyleft.org/" target="_blank" rel="noopener noreferrer">Copyleft</a> &#127279;&nbsp;<a href="http://balumn.github.io" target="_blank" rel="noopener noreferrer">balumn.github.io</a></p>
                </div>
            </React.Fragment>
        );
    }
}
export default Footer;