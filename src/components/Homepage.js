import React from "react";
import esloganKoopap from "../esloganKoopap.png";
import logoKoopap from "../assets/logoKoopap.png";
import SearchBar from "./SearchBar";
import SubjectList from "./SubjectList";
import "../css/Homepage.css";
import deco from "../assets/deco.png"
export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.subjectSearchHome = this.subjectSearchHome.bind(this);
  }
 
  subjectSearchHome() {
    this.props.subjectSearchApp();
  }
  
  render() {
    return (
      <div class="wrapper">
                  
         
          <div class="eslogann">
             <img src={esloganKoopap} className="eslogan"/>
          </div>
              <div class="flex-itemm">
              <SearchBar subjectSearchSB={this.props.subjectSearchHome} />
              <SubjectList subjects={this.props.subjects} />
              </div>
          <div class="masbuscado">

          ¡lo más buscado!

          </div>
         <div>
             <img src={deco} class="deco" />
        </div>
      </div>


    );
  }
}