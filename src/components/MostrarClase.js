import React from "react";
import { communicationGet } from "../communicationGet";
import "../css/MostrarClase.css";
import horario from "../assets/horario.png";
import pieza from "../assets/estrella.png";
import Schedule from "./Schedule";

export default class MostrarClase extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitRate = this.handleSubmitRate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.contracted = this.contracted.bind(this);
    this.log = this.log.bind(this);
    this.rated = this.rated.bind(this);
    this.state = { student: "", val: "", finished: false, hire: false };
    this.endContract = this.endContract.bind(this);
    
  }

  endContract(){
    this.props.endContractHome();
  }
  contracted(hired) {
    console.log("la funcion contracted es",hired)
    this.props.contractedHome(hired);
  }
  rated(val) {
    console.log("la funcion rated es",this.props.rated)
    this.props.ratedHome(val);
  }

  log(userPass) {
    this.props.logHome(userPass);
  }

  handleChange(event) {
    const target = event.target;
    const val = target.name;
    const value = target.value;
    this.setState({
      [val]: value,
    });

  }

  handleSubmit() {
    const param =
      "classId=" + this.props.classroom.id + "&student=" + this.state.student;
    communicationGet("FormContractClassServlet", param).then((data) => {
      if (data["code"] === 200) {
        data["user"] = JSON.parse(data["user"]);
        this.log(data["user"]);
        this.contracted(true);
        console.log("contracted handlesubmit",this.props.contracted)
      } else {
        console.log("no se ha podido contratar");
      }
    });
  }
  handleSubmitRate(event) {
    event.preventDefault();
    const param =
      "classId=" + this.props.classroom.id + "&rated=" + this.state.val;
    communicationGet("FormRateClassServlet", param).then((data) => {
      if (data["code"] === 200) {

        this.rated(true);
   
      } else {
        console.log("no se ha podido valorar");
      }
    });
  }

  
  render() {
    let contract;
    let rate;
    let piezas;
    let numeropiezas=Math.round(this.props.classroom.professor.professorValoration);
    console.log("state finished",this.state.finished)
    console.log("render contract",this.props.contracted)
    console.log("render rated:", this.props.rated)
    console.log("render hire:",this.state.hire)
    if(numeropiezas===1){
      piezas=(
     <div><img src={pieza}/></div>
     );
   }else if(numeropiezas===2){
     piezas=(
       <div><img src={pieza}/>
             <img src={pieza}/></div>
       );
   }else if(numeropiezas===3){
    piezas=(
       <div><img src={pieza}/>
             <img src={pieza}/>
             <img src={pieza}/></div>
       );
   }else if(numeropiezas===4){
     piezas=(
       <div><img src={pieza}/>
             <img src={pieza}/>
             <img src={pieza}/>
             <img src={pieza}/></div>
       );
   }else if(numeropiezas===5){
      piezas=(
       <div><img src={pieza}/>
             <img src={pieza}/>
             <img src={pieza}/>
             <img src={pieza}/>
             <img src={pieza}/></div>
       );
   }else{
     piezas=(
       <div>0/5</div>
     );
     
   }
   
    
    if (
      this.props.isLogged &&
      this.props.student.email != this.props.classroom.professor.email &&
      !this.props.contracted  && !this.props.classroom.finished                  
    ) {
      console.log("se busca")
      this.state.student = this.props.student.email;
      contract = (
        <div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input class="button" type="submit" value="contratar" />
            </form>
          </div>
        </div>
      );
    } else if (this.props.isLogged &&
      this.props.student.email != this.props.classroom.professor.email && this.props.contracted && !this.props.rated) {
        console.log("se contrata")
        console.log("state finished",this.state.finished)
      contract = "se ha contratado correctamente";
      rate = (
        <div>
          <div>
            <div>
              <form onSubmit={this.handleSubmitRate}>
                <input
                  type="text"
                  name="val"
                  class="redondeado"
                  placeholder="Puntúa esta clase del 1 al 5"
                  value={this.state.val}
                  onChange={this.handleChange}
                />
                <input class="button" type="submit" value="valorar clase" />
              </form>
            </div>
          </div>
        </div>
      );
    }else if (this.props.isLogged &&
      this.props.student.email != this.props.classroom.professor.email && this.props.rated){
        console.log("se ha puntuado")
        contract = null;
      rate = null;
      this.endContract();
    } else {
      console.log("No se cumple ningún if")
      
    }

    return (
     /*  <div class="containerClase">
        <div class="infoClase">
          <div class="section">
          <div class="mostrarClaseGrid">
            <div class="nombre">{this.props.classroom.professor.name}</div>
            <div class="descripcion">dsasadsadsa</div>
            <div class="koins">{this.props.classroom.price}</div>
            <div class="horario">
              aaaaaaaaaaaaa
            </div>
          </div>
          <Schedule />
          {contract}
          {rate}
        </div>
        </div>
      </div> */
      
      <div class="grapper">
        <div class="caja caja1">
         <div class="cesta" class="masbuscado">{this.props.classroom.professor.name}</div>
         <div class="cesta" class="masbuscado">"{this.props.classroom.professor.description}"</div>
         <div class="cesta" class="masbuscado">precio: {this.props.classroom.price} koins</div>
          </div>
       <div class="caja caja2"><p class="letraverde">este es el horario de {this.props.classroom.professor.name}.</p><p class="letraverde">¡contacta con él y recibe cuanto antes tu clase de matemáticas!</p></div>
       <div class="caja caja3" class="letraverde">{contract}{rate}</div>
       <div class="caja caja4"><img src={horario}/></div>
       <div class="caja caja5" ><p class="masbuscado">valoración de {this.props.classroom.professor.name}:{piezas} </p></div>
     
       
</div>

   


    );
  }
}
