import React, { Component } from 'react';
import './Post.css';

class Post extends Component {


    render() {

        const {message} = this.props.message;
        var clicks = 0;
        function clic() {
            clicks += 1;
            document.getElementById("clicks").innerHTML = clicks;
        };
        
        return (
            
            <div className="post-container">
                <p>{message.texte}</p>
                <div>
                    <button type="button" onclick="clic()">J'aime</button>
                    <p><a id="clicks">0</a>👍</p></div>
                </div>
            
        );
        
    }
}

export default Post;