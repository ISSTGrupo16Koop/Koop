import React from "react";
import esloganKoopap from "./esloganKoopap.png";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SubjectList from "./components/SubjectList";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { subjectSearch, initProfessors, initSubjects } from "./redux/actions";

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.subjectSearch = this.subjectSearch.bind(this);
  }
  /*
  componentDidMount() {
    subjects = this.subjects;
    professors = this.professors;
    this.props.dispatch(initSubjects(subjects));
    this.props.dispatch(initProfessors(professors));
  }
*/

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
                <Link to="/logIn">Iniciar sesión</Link>
              </li>
              <li>
                <Link to="/singIn">Registrarse</Link>
              </li>
            </ul>
          </nav>
        </Router>
        <div className="image">
          <div>
            <img src={esloganKoopap} className="App-logo" alt="logo" />
          </div>
          <SearchBar
            onSubject={subject => {
              this.props.dispatch(subjectSearch(subject));
            }}
          />
          <div>
            <button onClick={this.search}>Buscar</button>
          </div>
          <SubjectList subjects={this.props.subjects} />
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
