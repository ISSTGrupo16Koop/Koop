import React from "react";
import { communicationGet } from "../communicationGet";
export default class MostrarClase extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { student: "" };
  }
  handleSubmit() {
    const param =
      "classId=" + this.props.classroom.id + "&student=" + this.state.student;
    console.log(param);
    communicationGet("FormContractClassServlet", param).then((data) => {
      if (data["code"] === 200) {
        console.log("se ha contratado correctamente");
      } else {
        console.log("no se ha podido contratar");
      }
    });
  }
  render() {
    let contract;
    if (
      this.props.isLogged &&
      this.props.student.email != this.props.classroom.professor.email
    ) {
      this.state.student = this.props.student.email;
      contract = (
        <form onSubmit={this.handleSubmit}>
          <input class="button" type="submit" value="contratar" />
        </form>
      );
    }
    return (
      <div class="containerClase">
        <div class="infoClase"> 
          <div>
         <div class="flex-mostrar">
         {this.props.classroom.professor}
           </div>
         <div class="flex-mostrar">
            dsasadsadsafdsaaaaaaaaaaaaaaaaaaffdfadadfsfadafs
         </div>
         <div class="flex-mostrar">
         {this.props.classroom.price} koins
         </div>
        

         <div class="flex-mostrar">
         {this.props.classroom.subject}
         </div>
         <button class="button">contratar</button> 
         </div>
         {contract}
         
         </div>
         
      </div>
    );
  }
}
