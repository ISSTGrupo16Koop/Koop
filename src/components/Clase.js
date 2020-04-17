import React from "react";

export default class SubjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        
        <ul class="containerSub">

              <li class= "flex-obj"> profesor :  {this.props.profe } </li> 
              <li class= "flex-obj"> {this.props.asignatura } </li>
              <li class= "flex-obj"> {this.props.precio} kc</li>
         
        </ul>  
    );
    }

}