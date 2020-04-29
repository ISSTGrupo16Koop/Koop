import React from "react";

export default class MostrarClase extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="containerClase">
        <div class="infoClase"> 
          <div class="section">
         <div class="nombre">
         {this.props.classroom.professor}
           </div>
         <div class="descripción">
            dsasadsadsa
         </div>
         <div class="price">
         {this.props.classroom.price}
         </div>

         </div>
         <div>
         {this.props.classroom.subject}
         </div>
         <button class="button">contratar</button> 
       </div>
        
      </div>
    );
  }
}
