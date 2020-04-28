import React from "react";
import "../css/SubjectList.css";
import Clase from "./Clase";
export default class SubjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = this.props.subject[0].classlist.map((classroom) => {
      try {
        console.log("classlist ", this.props.subject[0].classlist);
        console.log("se devuelve " + { classroom });
        return <Clase subject={classroom} key={classroom.id} />;
      } catch (error) {
        console.log(error, "Ha habido un error");
      }
    });
    console.log("las clases" + { classes });
    return classes;
    //return <ul class="containerSub">{classes}</ul>;
  }
}

/*

<ul class="containerSub">
<li class="redondeadoSubLil">
  <Clase subject={this.props.subject[0].classlist[0]}></Clase>
</li>
<li class="redondeadoSubLil">
  <Clase subject={this.props.subject[0].classlist[1]}></Clase>
</li>
<li class="redondeadoSubLil">
  <Clase subject={this.props.subject[0].classlist[2]}></Clase>
</li>
</ul>

*/
