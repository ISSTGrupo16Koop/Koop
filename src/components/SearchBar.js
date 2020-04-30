import React from "react";

import { communicationGet } from "../communicationGet";
import { subject } from "../assets/mock-dataSubject";
import "../css/SearchBar.css";
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subject: "" };
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  search(subjectMock) {
    this.props.searchBar(subjectMock);
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
    communicationGet("SearchSubjectServlet", param).then((data) => {
      if (data["code"] === 200) {
        data["subject"] = JSON.parse(data["subject"]);
        console.log(data["subject"]);
        this.search(data["subject"]);
      } else if (data["code"] === 400) {
        console.log("no se ha encontrado esta asignatura");
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
            placeholder="       ¿qué quieres aprender hoy?"
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
