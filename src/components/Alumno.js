import React from "react";
import icono from "../assets/usuario.png";
import horario from "../assets/horario.png";
import pieza from "../assets/estrella.png";

export default class Alumno extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let piezas;
    let numeropiezas=Math.round(this.props.user.professorValoration);
   
    if(numeropiezas===1){
      piezas=(
     <div><img src={pieza}/></div>
     );
   }else if(numeropiezas===2){
     piezas=(
       <div><img src={pieza}/>
             <img src={pieza}/></div>
       );
   }else if(numeropiezas===3){
    piezas=(
       <div><img src={pieza}/>
             <img src={pieza}/>
             <img src={pieza}/></div>
       );
   }else if(numeropiezas===4){
     piezas=(
       <div><img src={pieza}/>
             <img src={pieza}/>
             <img src={pieza}/>
             <img src={pieza}/></div>
       );
   }else if(numeropiezas===5){
      piezas=(
       <div><img src={pieza}/>
             <img src={pieza}/>
             <img src={pieza}/>
             <img src={pieza}/>
             <img src={pieza}/></div>
       );
   }else{
     piezas=(
       <div>0/5</div>
     );
     
   }
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
             <div class="cestaprofe" class="masbuscado">valoración: {piezas} </div>
           </div>
           
    
        </div>
   
      </div>
    );
  }
}
