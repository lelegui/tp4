import React, { Component } from 'react';
import "./Img.css";

class Img extends Component {
    render() {
        const { image } = this.props;
        const { src, alt } = image;

        return (
            <div className="img-container">
                <img src={src} alt={alt}/>
            </div>
        );
    }
}

export default Img;