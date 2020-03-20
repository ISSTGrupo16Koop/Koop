import React from "react";
import esloganKoopap from "./esloganKoopap.png";
import subjects from "./assets/mock-data.js";
import professors from "./assets/mock-dataProf.js";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SubjectList from "./components/SubjectList";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { subjectSearch, initProfessors, initSubjects } from "./redux/actions";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    subjects = this.subjects;
    professors = this.professors;
    this.props.dispatch(initSubjects(subjects));
    this.props.dispatch(initProfessors(professors));
  }

  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/logIn">Log In</Link>
              </li>
              <li>
                <Link to="/singIn">Sing In</Link>
              </li>
            </ul>
          </nav>
        </Router>
        <div className="image">
          <div>
            <img src={esloganKoopap} className="App-logo" alt="logo" />
          </div>
          <div></div>
          <div>
            <button>Buscar</button>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state
  };
}
export default connect(mapStateToProps)(App);
