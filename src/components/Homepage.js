import React from "react";
import esloganKoopap from "../esloganKoopap.png";
import logoKoopap from "../assets/logoKoopap.png";
import SearchBar from "./SearchBar";
import SubjectList from "./SubjectList";
import "../css/Homepage.css";
export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.searchHome = this.searchHome.bind(this);
  }

  searchHome(subject) {
    this.props.searchApp(subject);
  }

  render() {
    let list;
    if (this.props.searching) {
      list = <SubjectList subject={this.props.subject} />;
    }
    return (
      <ul class="container2">
        <li class="eslogan">
          <img src={esloganKoopap} className="eslogan" />
        </li>
        <li class="flex-itemm">
          <SearchBar searchBar={this.props.searchHome} />
        </li>
        <li>{list}</li>
      </ul>
    );
  }
}
