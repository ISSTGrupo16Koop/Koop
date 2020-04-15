import React from "react";
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
      <div>
        <div>
          <input
            placeholder="Asignatura"
            onChange={event => this.props.subjectSearchSB(event.target.value)}
          />
        </div>
        <div>
          <button onClick={console.log("click")}>Buscar</button>
        </div>
      </div>
    );
  }
}
