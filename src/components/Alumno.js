import React from "react";

export default class Alumno extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p class="letras">
          <b> perfil de alumno:</b>
        </p>
        <p class="letras">nombre: {this.props.user[0].name} </p>
        <p class="letras">email: {this.props.user[0].email} </p>
        <p class="letras">ciudad: {this.props.user[0].location} </p>
        <p class="letras">descripción: {this.props.user[0].description} </p>
      </div>
    );
  }
}
