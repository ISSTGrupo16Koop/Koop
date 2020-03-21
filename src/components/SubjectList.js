import React from "react";
export default class SubjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>{this.props.subjects[this.props.subjects.length - 1].subject}</ul>
      </div>
    );
  }
}
