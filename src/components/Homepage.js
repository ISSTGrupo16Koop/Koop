import React from "react";
import esloganKoopap from "../esloganKoopap.png";
import logoKoopap from "../assets/logoKoopap.png";
import SearchBar from "./SearchBar";
import SubjectList from "./SubjectList";
import "../css/Homepage.css";
import deco from "../assets/deco.png";
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
    } else {
      list = (
        <div>
          <div class="masbuscado">¡lo más buscado!</div>
          <div>
            <img src={deco} class="deco" />
          </div>
        </div>
      );
    }
    return (
      <div class="wrapper">
        <div class="eslogann">
          <img src={esloganKoopap} className="eslogan" />
        </div>
        <div class="flex-itemm">
          <SearchBar searchBar={this.props.searchHome} />
          {list}
        </div>
      </div>
    );
  }
}
