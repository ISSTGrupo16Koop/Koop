import React from "react";
import { communication } from "../communication";
import { user } from "../assets/mock-dataUser";
import "../css/Cuadrados.css";
import { Route } from "react-router-dom";
export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.log = this.log.bind(this);
    this.state = { email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  log(userPass) {
    this.props.logApp(userPass);
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
    this.log(user);

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
      
        
        <form onSubmit={this.handleSubmit} >
          <ul class="containerFormLogVertical">
          <li class="formLogVertical">
          <input 
            type="text"
            name="email"
            placeholder="email"
            class="redondeado"
            value={this.state.email}
            onChange={this.handleChange}
          />
          </li >
          <li class="formLogVertical">
          <input
            type="password"
            name="password"
            placeholder="contraseña"
            class="redondeado"
            value={this.state.password}
            onChange={this.handleChange}
          />
          </li>
          <li class="formLogVertical">
          <input class="button" type="submit" value="iniciar sesión" />
          </li>
          </ul>
        </form>
      
    );
  }
}
