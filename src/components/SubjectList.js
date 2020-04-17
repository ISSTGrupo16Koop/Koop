import React from "react";
import "../css/SubjectList.css";
import Clase from "./Clase"
export default class SubjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul class= "containerSub">
        
          <li class="redondeadoSubLil"><Clase profe = "avicii" asignatura="mates" precio="10"/></li>

          <li class="redondeadoSubLil"><Clase profe = "avicii" asignatura="mates" precio="10"/></li>

          <li class="redondeadoSubLil"><Clase profe = "avicii" asignatura="mates" precio="10"/></li>
       
      </ul>
    );
  }
}
