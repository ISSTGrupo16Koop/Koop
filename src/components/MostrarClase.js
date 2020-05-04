import React from "react";
import { communicationGet } from "../communicationGet";
import "../css/MostrarClase.css";
import horario from "../assets/horario.png";
import stars from "../assets/stars.png";
import Schedule from "./Schedule";
export default class MostrarClase extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitRate = this.handleSubmitRate.bind(this);
    this.contracted = this.contracted.bind(this);
    this.log = this.log.bind(this);
    this.rated = this.rated.bind(this);
    this.state = { student: "" };
  }
  contracted() {
    this.props.contractedHome();
  }
  rated() {
    this.props.ratedHome();
  }

  log(userPass) {
    this.props.logHome(userPass);
  }

  handleSubmit() {
    const param =
      "classId=" + this.props.classroom.id + "&student=" + this.state.student;
    console.log(param);
    communicationGet("FormContractClassServlet", param).then((data) => {
      if (data["code"] === 200) {
        data["user"] = JSON.parse(data["user"]);
        this.log(data["user"]);
        this.contracted();
      } else {
        console.log("no se ha podido contratar");
      }
    });
  }
  handleSubmitRate(rated) {
    const param = "classId=" + this.props.classroom.id + "&rated=" + rated;
    console.log(rated);
    /*
    communicationGet("FormRateClassServlet", param).then((data) => {
      if (data["code"] === 200) {
        this.rated();
      } else {
        console.log("no se ha podido contratar");
      }
    });
    */
  }
  render() {
    let contract;
    let rate;
    console.log(this.props.contracted);
    console.log(this.props.rated);

    if (
      this.props.isLogged &&
      this.props.student.email != this.props.classroom.professor.email &&
      !this.props.contracted &&
      !this.props.classroom.finished
    ) {
      this.state.student = this.props.student.email;
      contract = (
        <form onSubmit={this.handleSubmit}>
          <input class="button" type="submit" value="contratar" />
        </form>
      );
    } else if (this.props.contracted) {
      contract = "se ha contratado correctamente";
      rate = (
        <div>
          <button type="button" onClick={this.handleSubmitRate(1)}>
            1
          </button>
          <button type="button" onClick={this.handleSubmitRate(2)}>
            2
          </button>
        </div>
      );
    } else if (this.props.rated) {
      contract = null;
      rate = null;
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
          <Schedule />
          {contract}
          {rate}
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
