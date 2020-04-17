import React from "react";
import { communication } from "../communication";

import "../css/Cuadrados.css";
export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.log = this.log.bind(this);
    this.state = { email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  log() {
    this.props.logApp();
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
            class = "redondeado"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            class = "redondeado"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input class ="button" type="submit" value="iniciar sesión" onClick={this.log} />
          
        </form>
      </div>
    );
  }
}
