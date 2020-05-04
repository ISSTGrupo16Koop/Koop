import React from "react";
import { communicationGet } from "../communicationGet";
import "../css/MostrarClase.css";
import horario from "../assets/horario.png";
import stars from "../assets/stars.png";
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
     /*  <div class="containerClase">
        <div class="infoClase">
          <div class="section">
          <div class="mostrarClaseGrid">
            <div class="nombre">{this.props.classroom.professor.name}</div>
            <div class="descripcion">dsasadsadsa</div>
            <div class="koins">{this.props.classroom.price}</div>
            <div class="horario">
              aaaaaaaaaaaaa
            </div>
          </div>
          {contract}
        </div>
        </div>
      </div> */
      <div class="grapper">
        <div class="caja caja1">
         <div class="cesta" class="masbuscado">{this.props.classroom.professor.name}</div>
         <div class="cesta" class="masbuscado">"{this.props.classroom.professor.description}"</div>
         <div class="cesta" class="masbuscado">precio: {this.props.classroom.price} koins</div>
    </div>
       <div class="caja caja2"><p class="letraverde">este es el horario de {this.props.classroom.professor.name}.</p><p class="letraverde">¡contacta con él y recibe cuanto antes tu clase de matemáticas!</p></div>
       <div class="caja caja3">{contract}</div>
       <div class="caja caja4"><img src={horario}/></div>
       <div class="caja caja5"><p class="masbuscado"><img class="stars" src={stars}/></p></div>
</div>

   


    );
  }
}
