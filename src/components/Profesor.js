import React from "react";
import "../css/Parrafo.css";
import Button from "./Button";
import { communication } from "../communication";
export default class Profesor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subject: "", price: "" };
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
    event.preventDefault();
    this.log();
    const param =
      "subject=" + this.state.subject + "&price=" + this.state.price;
    communication("FormCreaClassServlet", param).then((data) => {
      if (data["success"] === 200) {
        console.log(data);
      }
    });
  }

  render() {
    return (
      <div>
        <p>__________________________________</p>
        <p class="letras">perfil de profesor</p>
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
