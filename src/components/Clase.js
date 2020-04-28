import React from "react";
import "../css/SubjectList.css";

export default class SubjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("li", this.props.subject);
    return (
      <ul class="containerSub">
        <li class="flex-obj"> profesor: {this.props.subject.professor} </li>
        <li class="flex-obj">{this.props.subject.subject} </li>
        <li class="flex-obj"> precio: {this.props.subject.price} koins</li>
      </ul>
    );
  }
}

/*
  render() {
    return (
      <ul class="containerSub">
        <li class="flex-obj">
          {" "}
          profesor: {this.props.subject[0].classlist[0].professor}{" "}
        </li>
        <li class="flex-obj">{this.props.subject[0].subject} </li>
        <li class="flex-obj">
          {" "}
          {this.props.subject[0].classlist[0].price} koins
        </li>
      </ul>
    );
  }
*/
