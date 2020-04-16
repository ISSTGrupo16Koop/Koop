import React from "react";

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
        <p>
        <b> Perfil de Profesor </b>
         </p>
         <p>
        ¿Qué deseas enseñar hoy?
        </p>
        <form>
        <input placeholder="Clase a ofertar" />
          <button type="button">¡Ofertar!</button>  
        </form>
        </div>  
    );
    }
    

  }
