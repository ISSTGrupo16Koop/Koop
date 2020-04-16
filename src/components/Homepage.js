import React from "react";
import esloganKoopap from "../esloganKoopap.png";
import logoKoopap from "../assets/logoKoopap.png";
import SearchBar from "./SearchBar";
import SubjectList from "./SubjectList";
import "../css/Homepage.css";
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
      <div>
         
          
         
        <div>
          <img src={esloganKoopap} className="logo"/>
        </div>
        <SearchBar subjectSearchSB={this.props.subjectSearchHome} />
        <SubjectList subjects={this.props.subjects} />
        
      </div>
    );
  }
}