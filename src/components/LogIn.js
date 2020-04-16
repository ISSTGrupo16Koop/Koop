import React from "react";
import Button from "./Button";

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
          <input placeholder="Usuario" />
          <input placeholder="Contraseña" />
          <Button text="Iniciar sesión" action={this.log}/>
        </form>
      </div>
    );
    }
    

  }
