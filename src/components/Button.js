import React from 'react';
import "../css/button.css";

export default class Button extends React.Component {
	render() {
		console.log(this.props.disabled)
		return (
			<div>
				<button class= "button">{this.props.text}</button>
			</div>
		);
	}
}