import React from "react";
import "../css/Button.css";
export default class Button extends React.Component {
  constructor(props) {
    super(props);

  }

  

  render() {
    return (
        
		<button class="button" type="button" onClick={this.props.action}>{this.props.text}</button>
    );
    }
    

  }
