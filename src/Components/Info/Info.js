import React, { Component } from 'react';
import "./Info.css";

class Info extends Component {

    /*function Click () {
        switch (this.state.bgcolor){
        case 'black': 
          this.setState({bgcolor:'black'});
          break;
        case 'white' :
          this.setState({bgcolor:'white'});
          break;
      }
      }*/
    render() {
        const info = this.props.info;
        
        return (
            <div className="text">
                <h3>{info.nom}</h3>
                <h5>{info.prenom}</h5>
                <p>{info.dateNaissance}</p>
                <div className="bouton"><button type="button" /*onclick={() => Click()}*/>Change Style</button></div>
                
            </div>
        );
    }
}

export default Info;