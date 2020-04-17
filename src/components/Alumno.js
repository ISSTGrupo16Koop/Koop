import React from "react";

export default class Alumno extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>
          <b> Perfil de alumno: </b>
        </p>
        <p>nombre: {this.props.user[0].name} </p>
        <p>email: {this.props.user[0].email} </p>
        <p>ciudad: {this.props.user[0].location} </p>
        <p>descripción: {this.props.user[0].description} </p>
      </div>
    );
  }
}
