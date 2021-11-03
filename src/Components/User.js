import React, { Component } from 'react';
import "./User.css";
import Img from "./Image/Img";
import Info from "./Info/Info";

class User extends Component {



    render() {


        const { info, image } = this.props.profilData;

        return(
            <div className="profil-container">
                <Img image={image}/>
                <Info info={info} />
            </div>
        )
    }
}

export default User;