import React from "react";
import "../css/SubjectList.css";
import Clase from "./Clase";
export default class SubjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul class="containerSub">
        <li class="redondeadoSubLil">
          <Clase subject={this.props.subject[0].classlist[0]}></Clase>
        </li>
        <li class="redondeadoSubLil">
          <Clase subject={this.props.subject[0].classlist[0]}></Clase>
        </li>
        <li class="redondeadoSubLil">
          <Clase subject={this.props.subject[0].classlist[0]}></Clase>
        </li>
      </ul>
    );
  }
}

/*
    const classes = this.props.subject[0].classlist.map(function (classroom) {
      try {
        return <Clase subject={classroom} key={classroom.id} />;
      } catch (error) {
        console.log(error);
      }
    });

    return <ul class="containerSub">{classes}</ul>;
  }
 */
