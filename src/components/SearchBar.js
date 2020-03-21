import React from "react";
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
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
