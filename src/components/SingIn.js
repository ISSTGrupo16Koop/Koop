import React from "react";
import Button from "./Button"
import "../css/Cuadrados.css"
export default class SingIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <input placeholder="Usuario" class = "redondeado"/>
          <input placeholder="Correo" class="redondeado"/>
          <input placeholder="Contraseña" class= "redondeado" />
          <Button text = "registrarse" type ="submit"/>
        </form>
      </div>
    );
  }
}
