import React from "react";
import Button from "./Button"
import "../css/Cuadrados.css"
export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.log=this.log.bind(this);
  }

  log(){
    this.props.logApp();
  }


  render() {
    return (
      <div>
        <form>
          <input placeholder="Usuario" class = "redondeado" />
          <input placeholder="Contraseña" class ="redondeado" />
          <Button text ="iniciar sesión" action={this.log}/>
        </form>
      </div>
    );
    }
    

  }
