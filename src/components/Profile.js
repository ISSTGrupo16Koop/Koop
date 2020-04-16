import React from "react";
import Profesor from "./Profesor";
import Alumno from "./Alumno";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Button from "./Button"

var perfilalumno= true;
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.changeProfile=this.changeProfile.bind(this);
  }

  
  render() {
    
    
    if(perfilalumno === true){
    return (
      
          <div>
            <Button type="button" action={this.changeProfile} text=" cambiar a perfil profesor "/>
            <Alumno />
            <Profesor />
          </div>
          
          
    )
      }else{
        
      return (
      <div>
        <button type="button" onClick={this.changeProfile}>Cambiar a perfil Alumno</button>
        
        <p>
          Nombre:
        </p>
        <p>
          <Profesor />
        </p>
        
      </div>
      );
        }
    
    }

    changeProfile(){
      console.log(perfilalumno)
      perfilalumno = !perfilalumno;
      
      return perfilalumno;
      
    }

    renderScreen(){
      if(this.props.perfilalumno === false){
        this.forceUpdate();
      }
    }
    }
    
    
 /*    if(perfilalumno === true){
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
      } */

  
