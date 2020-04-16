import React from "react";
import "../css/Parrafo.css"
import Button from "./Button"
export default class Profesor extends React.Component {
  constructor(props) {
    super(props);

  }

  

  render() {
    return (
        <div>
          <p>
          __________________________________

        </p>
        <p class="letras" >
        perfil de profesor
        </p>
         <p class="letras">
        ¿qué deseas enseñar hoy?
        </p>
        <form>
        <input placeholder="clase a ofertar" class="redondeado"/>
          <Button type="button" text="¡ofertar!" />  
        </form>
        </div>  
    );
    }
    

  }
