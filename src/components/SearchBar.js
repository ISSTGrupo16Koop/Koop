import React from "react";

import { communication } from "../communication";
import "../css/SearchBar.css";
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subject: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const param = "subject=" + this.state.subject;
    communication("SearchSubjectServlet", param).then((data) => {
      if (data["success"] === 200) {
        console.log(data);
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="subject"
            placeholder="¿qué quieres aprender hoy?"
            class="searchTerm"
            value={this.state.subject}
            onChange={this.handleChange}
          />
          <input class="button" type="submit" value="buscar" />
        </form>
      </div>
    );
  }
}
