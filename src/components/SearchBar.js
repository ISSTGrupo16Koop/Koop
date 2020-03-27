import React from "react";
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.subjectSearchOriginal=this.subjectSearchOriginal.bind(this);
  }

subjectSearchOriginal(){

  this.props.subjectSearchHome();
}

  render() {
    return (
      <div>
        <input
          placeholder="Asignatura"
          onChange={event => this.props.onSubject(event.target.value)}
        />
      </div>
    );
  }
}
