import React from "react";
import icono from "../assets/usuario.png";
import horario from "../assets/horario.png";
export default class Alumno extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <div class="profesorContainer">
        <div class="profesor profesor6"><img src={icono} class="icono"/></div>
           <div class="profesor profesor1">
             <div class="cestaprofe" class="masbuscado">nombre: {this.props.user.name}</div>
             <div class="cestaprofe" class="masbuscado">balance: {this.props.user.status} koins</div>
             <div class="cestaprofe2" class="masbuscado">ciudad: {this.props.user.location}</div>
             <div class="cestaprofe2" class="masbuscado">correo: {this.props.user.email}</div>
           </div>
           <div class="profesor profesor2">
             <img src={horario}/>
           </div>
           <div class="profesor profesor3">
             <div class="cestaprofe" class="masbuscado"> <i>"{this.props.user.description}"</i></div>
             <div class="cestaprofe" class="masbuscado">valoración: </div>
           </div>
           
    
        </div>
   
      </div>
    );
  }
}
