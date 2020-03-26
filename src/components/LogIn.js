import React from "react";
export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <input placeholder="Usuario" />
          <input placeholder="Contraseña" />
          <button type="submit">Iniciar Sesion</button>
        </form>
      </div>
    );
  }
}
