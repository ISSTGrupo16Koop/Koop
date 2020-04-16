import React from "react";
import esloganKoopap from "../esloganKoopap.png";
import SearchBar from "./SearchBar";
import SubjectList from "./SubjectList";
export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    //this.subjectSearchHome = this.subjectSearchHome.bind(this);
  }
  /*
  subjectSearchHome() {
    this.props.subjectSearchApp;
  }
  */
  render() {
    return (
      <div className="image">
        <div>
          <img src={esloganKoopap} className="App-logo" alt="logo" />
        </div>

        <SearchBar
          onSubject={subject => {
            this.subjectSearch(subject);
          }}
        />
        <div>
          <button type ="submit" onClick={this.search}>Buscar</button>
        </div>

        <SearchBar subjectSearchSB={this.props.subjectSearchHome} />

        <SubjectList subjects={this.props.subjects} />
      </div>
    );
  }
}
