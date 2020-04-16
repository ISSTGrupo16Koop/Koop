import React from "react";

export default class Profesor extends React.Component {
  constructor(props) {
    super(props);

  }

  

  render() {
    return (
        <div>
        ¿Qué deseas enseñar hoy?
        <form>
        <input placeholder="Clase a ofertar" />
          <button type="button">¡Ofertar!</button>  
        </form>
        </div>  
    );
    }
    

  }
