import React from "react";
import "../css/Parrafo.css";
import Button from "./Button";

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
        <p class="letras">
          <b>perfil de profesor</b>
        </p>
        <p class="letras">nombre: {this.props.user.name} </p>
        <p class="letras">email: {this.props.user.email} </p>
        <p class="letras">status: {this.props.user.status} koins</p>
        <p class="letras">ciudad: {this.props.user.location} </p>
        <p class="letras">descripción: {this.props.user.description} </p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="subject"
            placeholder="¿que quieres enseñar?"
            class="redondeado"
            value={this.state.subject}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="price"
            placeholder="¿cuanto quieres cobrar?"
            class="redondeado"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <input class="button" type="submit" value="¡ofertar clase!" />
        </form>
      </div>
    );
  }
}
