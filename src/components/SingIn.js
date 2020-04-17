import React from "react";
import Button from "./Button";
import { communication } from "../communication";
import "../css/Cuadrados.css";
export default class SingIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      location: "",
      description: "",
    };
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
      "email=" +
      this.state.email +
      "name=" +
      this.state.name +
      "&password=" +
      this.state.password +
      "location=" +
      this.state.location +
      "description=" +
      this.state.description;

    communication("FormCreaUserServlet", param).then((data) => {
      if (data["success"] === 200) {
        console.log(data);
      }
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="email"
            class="redondeado"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="nombre y apellido"
            class="redondeado"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="contraseña"
            class="redondeado"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="ciudad"
            class="redondeado"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="descripción"
            class="redondeado"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input class="button" type="submit" value="registrarse" />
        </form>
      </div>
    );
  }
}
