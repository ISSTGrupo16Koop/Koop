import React from "react";
import "../css/SubjectList.css";

import MostrarClase from"./MostrarClase";


export default class SubjectList extends React.Component {
  constructor(props) {
    super(props);
    this.infoClass=this.infoClass.bind(this);
  }

  infoClass(){
   
    this.props.infoClassSubjectList(this.props.subject);

  }


  render() {
  
    return (
      
        <ul class="containerSub">
        <li class="flex-obj"> profesor: {this.props.subject.professor} </li>
        <li class="flex-obj">{this.props.subject.subject} </li>
        <li class="flex-obj"> precio: {this.props.subject.price} koins</li>
        <li class="flex-obj"><button class="button" onClick={this.infoClass}>+ info</button> </li>
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
