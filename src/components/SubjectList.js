import React from "react";
export default class SubjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>{this.props.subjects[0].subject}</ul>
      </div>
    );
  }
}
