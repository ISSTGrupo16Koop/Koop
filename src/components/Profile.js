import React from "react";
import Profesor from "./Profesor";
import Alumno from "./Alumno";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";


var perfilalumno = true;
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.changeProfile=this.changeProfile.bind(this);
    
  }

  
  

  

  render() {
    
    
    if(perfilalumno === true){
    return (
          <div>
            <button type="button" onClick={this.changeProfile}>Cambiar a perfil Profesor</button>
            <p>
            hola soy alumno
          </p>
          </div>
    )
      }else{
      return (
      <div>
        <button type="button" onClick={this.changeProfile}>Cambiar a perfil Alumno</button>
        hola soy profesor
      </div>
      );
    }
    }

    changeProfile(){
      console.log(perfilalumno)
      perfilalumno = !perfilalumno
      return perfilalumno;
      
    }
    }
    

  
