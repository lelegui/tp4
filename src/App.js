import React, { Component } from 'react';
import User from "./Components/User"
import './App.css';
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";
import Post from "./Components/Message/Post";



const user1 = {
    info: {
        prenom: "Marie",
        nom: "Dupont",
        dateNaissance: "21/05/2000"
    },
    image: {
        src: "https://fr.web.img6.acsta.net/pictures/20/01/31/14/13/5661728.jpg",
        alt: "Marie"
    },
    message: {
        texte:"au top <3"
    }

    }

const user2 = {
    info: {
        prenom: "Guillaume",
        nom: "Gibert",
        dateNaissance: "27/04/2000"
    },
    image: {
        src: "https://www.valentinespepper.com/wp-content/uploads/2021/08/leonardo-dicaprio-jeune-valentines-pepper-2.jpg",
        alt: "Guillaume"
    },
    message: {
        texte:"Trop cool le skate !!!!"
    }
}

const user3 = {
    info: {
        prenom: "Ilyas",
        nom: "Chabi",
        dateNaissance: "08/11/2000"
    },
    image: {
        src: "https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/people/style/trajectoire-mode/brad-pitt-de-papa-star-a-jeune-premier/1988-premieres-apparitions/10771763-1-fre-FR/1988_premieres_apparitions.jpg",
        alt: "Ilyas"
    },
    message: {
        texte:":)"
    }
}






class App extends Component {


    constructor(props){
        super(props);
        this.state={
            user: {

                info: {
                    prenom: "Marie",
                    nom: "Dupont",
                    dateNaissance: "21/05/2000"
                },

                image: {
                    src: "https://fr.web.img6.acsta.net/pictures/20/01/31/14/13/5661728.jpg",
                    alt: "Marie"
                },

                message: {
                    texte:"au top <3",
                }

            },

        }
        
    }


    fonction1(){

        this.setState({user : user1});

    }
    fonction2(){

        this.setState({user : user2});
    }

    fonction3(){

        this.setState({user : user3});
    }

  render() {
    return (


      <div className="App">

        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossOrigin="anonymous"
        />

        <Navbar bg="primary" variant="dark">

        <Navbar.Brand href="#facebook">Facebook Ultra Lite</Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">
    <Button>
            <Button onClick={()=>{this.fonction1()}}>Marie</Button>
            <Button onClick={()=>{this.fonction2()}}>Guillaume</Button>
            <Button onClick={()=>{this.fonction3()}}>Ilyas</Button>
          </Button>
    </Navbar.Collapse>
</Navbar>

          <h1><br></br>Profil Facebook</h1>

          <User profilData={this.state.user}/>

          <Post message={this.state.user}/>

      </div>
    );
  }
}

export default App;