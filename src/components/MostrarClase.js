import React from "react";

export default class MostrarClase extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

   
    return (
      <div class="containerSub">
        <div class="redondeadoSubLil"> 
         {this.props.classroom.professor}
         {this.props.classroom.subject}
         {this.props.classroom.price}
       </div>
      </div>
    );
  }
}
