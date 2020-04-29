import React from "react";
import { communicationGet } from "../communicationGet";
export default class MostrarClase extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const param =
      "id=" +
      this.props.classroom.id +
      "&student=" +
      this.props.student[0].email;
    console.log(param);
    communicationGet("FormContractClassServlet", param).then((data) => {
      if (data.code === 200) {
        console.log(data);
      }
    });
  }
  render() {
    let contract;
    if (this.props.isLogged) {
      contract = (
        <form onSubmit={this.handleSubmit}>
          <input class="button" type="submit" value="contratar" />
        </form>
      );
    }
    return (
      <div class="containerClase">
        <div class="infoClase">
          <div class="section">
            <div class="nombre">{this.props.classroom.professor}</div>
            <div class="descripción">dsasadsadsa</div>
            <div class="price">{this.props.classroom.price}</div>
          </div>
          <div>{this.props.classroom.subject}</div>
          {contract}
        </div>
      </div>
    );
  }
}
