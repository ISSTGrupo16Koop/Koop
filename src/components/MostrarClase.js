import React from "react";

export default class MostrarClase extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="containerClase">
        <div class="infoClase"> 
          <div>
         <div class="flex-mostrar">
         {this.props.classroom.professor}
           </div>
         <div class="flex-mostrar">
            dsasadsadsafdsaaaaaaaaaaaaaaaaaaffdfadadfsfadafs
         </div>
         <div class="flex-mostrar">
         {this.props.classroom.price} koins
         </div>
        

         <div class="flex-mostrar">
         {this.props.classroom.subject}
         </div>
         <button class="button">contratar</button> 
         </div>
         
         
         </div>
         
      </div>
    );
  }
}
