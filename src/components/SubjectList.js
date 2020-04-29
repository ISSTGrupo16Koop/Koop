import React from "react";
import "../css/SubjectList.css";
import Clase from "./Clase";
export default class SubjectList extends React.Component {
  constructor(props) {
    super(props);
    this.infoClassSubjectList=this.infoClassSubjectList.bind(this);
  }


  infoClassSubjectList(subject){
    this.props.infoClassHome(subject);
  }

  render() {

    //Recorremos arrya de clases con un map para mostrar todas las clases de la asignatura buscada
    
    const classes = this.props.subject[0].classlist.map((classroom) => {
      
      try {
       
        //ContainerSub es el bloque con todo el conjunto de clases
        //RedondeadoSubLil da estilo a cada clase individual (bordes redondos y estructura horizontal)
        return <div class="containerSub"><div class="redondeadoSubLil"><Clase subject={classroom} infoClassSubjectList={this.infoClassSubjectList} key={classroom.id} /></div></div>
      } catch (error) {
        console.log(error, "Ha habido un error");
      }
      
    });
    
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
