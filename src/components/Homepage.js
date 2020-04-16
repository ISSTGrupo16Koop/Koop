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
      <ul class="container2">
                  
         
            <li class="eslogan">
          <img src={esloganKoopap} className="eslogan"/>
          </li>
        <li class="flex-itemm">
        <SearchBar subjectSearchSB={this.props.subjectSearchHome} />
        <SubjectList subjects={this.props.subjects} />
        </li>
      </ul>
    );
  }
}
