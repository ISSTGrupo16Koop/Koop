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
        <p class="letras">nombre: {this.props.user.name} </p>
        <p class="letras">email: {this.props.user.email} </p>
        <p class="letras">status: {this.props.user.status} koins </p>
        <p class="letras">ciudad: {this.props.user.location} </p>
        <p class="letras">descripción: {this.props.user.description} </p>
      </div>
    );
  }
}
