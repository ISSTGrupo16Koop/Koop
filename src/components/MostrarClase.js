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
    this.handleChange = this.handleChange.bind(this);
    this.contracted = this.contracted.bind(this);
    this.log = this.log.bind(this);
    this.rated = this.rated.bind(this);
    this.state = { student: "", val: "" };
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

  handleChange(event) {
    const target = event.target;
    const val = target.name;
    const value = target.value;
    this.setState({
      [val]: value,
    });
    console.log(this.state);
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
  handleSubmitRate(event) {
    event.preventDefault();
    console.log(event);
    const param =
      "classId=" + this.props.classroom.id + "&rated=" + this.state.val;
    communicationGet("FormRateClassServlet", param).then((data) => {
      if (data["code"] === 200) {
        this.rated();
      } else {
        console.log("no se ha podido valorar");
      }
    });
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
        <div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input class="button" type="submit" value="contratar" />
            </form>
          </div>
        </div>
      );
    } else if (this.props.contracted && !this.props.rated) {
      contract = "se ha contratado correctamente";
      console.log("contratada");
      rate = (
        <div>
          <div>
            <div>
              <form onSubmit={this.handleSubmitRate}>
                <input
                  type="text"
                  name="val"
                  class="redondeado"
                  placeholder="puntuación 1-5"
                  value={this.state.val}
                  onChange={this.handleChange}
                />
                <input class="button" type="submit" value="valorar clase" />
              </form>
            </div>
          </div>
        </div>
      );
    } else if (this.props.rated) {
      console.log("valorada");
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
       <div class="caja caja3">{contract}{rate}</div>
       <div class="caja caja4"><img src={horario}/></div>
       <div class="caja caja5">valoración de miguel: {this.props.classroom.professor.professorvaloration}</div>
     
       
</div>

   


    );
  }
}
