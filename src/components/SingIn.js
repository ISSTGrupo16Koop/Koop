import React from "react";
export default class SingIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <input placeholder="Usuario" />
          <input placeholder="Correo" />
          <input placeholder="Contraseña" />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    );
  }
}
