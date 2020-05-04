import React from "react";
import { communicationGet } from "../communicationGet";
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
      <div class="containerClase">
        <div class="infoClase">
          <div class="section">
            <div class="nombre">{this.props.classroom.professor.name}</div>
            <div class="descripción">dsasadsadsa</div>
            <div class="price">{this.props.classroom.price}</div>
          </div>
          <Schedule />
          {contract}
          {rate}
        </div>
      </div>
    );
  }
}
