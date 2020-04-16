import React from "react";
import { communication } from "../communication";

import Button from "./Button";
import "../css/Cuadrados.css";
export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.log = this.log.bind(this);
    this.state = { email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  log = () => {
    this.props.logApp();
  };

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    //console.log(JSON.stringify(this.state));
    //console.log(this.state);
    //alert("A name was submitted: " + this.state);
    event.preventDefault();
    const param =
      "email=" + this.state.email + "&password=" + this.state.password;
    communication("FormLoginServlet", param).then((data) => {
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
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
          Iniciar Sesión
        </form>
        <p>{JSON.stringify(this.state)}</p>
      </div>
    );
  }
}
