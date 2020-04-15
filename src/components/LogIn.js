import React from "react";

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
          <button type="button" onClick={this.log}>Iniciar Sesión</button>
        </form>
      </div>
    );
    }
    

  }
