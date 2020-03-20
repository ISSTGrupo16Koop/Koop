import React from "react";
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input onChange={event => this.props.onSubject({ event })} />
      </div>
    );
  }
}
