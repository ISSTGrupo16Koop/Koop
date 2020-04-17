import React from "react";
import Profesor from "./Profesor";
import Alumno from "./Alumno";
import Button from "./Button";

var perfilalumno = true;
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.changeProfessor = this.changeProfessor.bind(this);
    this.changeStudent = this.changeStudent.bind(this);
  }
  changeProfessor() {
    this.props.changeProfessorApp();
  }
  changeStudent() {
    this.props.changeStudentApp();
  }
  render() {
    if (this.props.userView) {
      return (
        <div class="wrapper">
          <p>
            <Button
              type="button"
              action={this.changeStudent}
              text="cambiar a perfil alumno"
            />
          </p>
          <p>
            <Profesor user={this.props.user} />
          </p>
        </div>
      );
    } else {
      return (
        <div class="wrapper">
          <p>
            <Button
              type="button"
              action={this.changeProfessor}
              text="cambiar a perfil profesor"
            />
            <Alumno user={this.props.user} />
          </p>
        </div>
      );
    }
  }
}
