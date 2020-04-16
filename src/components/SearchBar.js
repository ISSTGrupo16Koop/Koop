import React from "react";
import Button from "./Button"
import "../css/SearchBar.css";
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.subjectSearchSB = this.subjectSearchSB.bind(this);
  }

  
  subjectSearchSB() {
    this.props.subjectSearchHome();
  }
  

  render() {
    return (
    <div class= "wrap">
      <div class= "search">
        <div >
          <input
            type = "text"
            class="searchTerm"
            placeholder="Asignatura"
            onChange={event => this.props.subjectSearchSB(event.target.value)}
          />
        </div>
        <div>
          <Button text={"buscar"}/>
        </div>
      </div>
    </div>
    );
  }
}
