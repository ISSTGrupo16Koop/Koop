import React from "react";
import "../css/Parrafo.css";
import Button from "./Button";
import "../css/Profesor.css";
import icono from "../assets/usuario.png"
import horario from "../assets/horario.png"

import { communicationGet } from "../communicationGet";
export default class Profesor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subject: "", price: "", prof: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    this.state.prof = this.props.user.email;
    event.preventDefault();
    console.log("se va a hacer el fetch");
    const param =
      "subject=" +
      this.state.subject +
      "&price=" +
      this.state.price +
      "&user=" +
      this.state.prof;
    communicationGet("FormCreaClassServlet", param).then((data) => {
      console.log("data", data);
      if (data["code"] === 200) {
        console.log(data);
      } else {
        console.log("no se ha podido crear la clase");
      }
    });
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
           
      <div class="profesor4">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="subject"
            placeholder="¿que quieres enseñar?"
            class="redondeado"
            value={this.state.subject}
            onChange={this.handleChange}
          />
          <p></p>
           <input
            type="text"
            name="price"
            placeholder="¿cuanto quieres cobrar?"
            class="redondeado"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <p></p>
          <input class="button" type="submit" value="¡ofertar clase!" />
        </form>
        </div>
        </div>
      </div>
    );
  }
}
