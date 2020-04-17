import React from "react";
export default class SubjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>{this.props.subject[0].classlist[0].professor}</ul>
        <ul>{this.props.subject[0].classlist[0].price}</ul>
      </div>
    );
  }
}
