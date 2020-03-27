import React from "react";
import esloganKoopap from "./esloganKoopap.png";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SubjectList from "./components/SubjectList";
import LogIn from "./components/LogIn";
import SingIn from "./components/SingIn";
import Homepage from "./components/Homepage";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { subjectSearch, initProfessors, initSubjects } from "./redux/actions";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.subjectSearch = this.subjectSearch.bind(this);
  }

  subjectSearch(subject) {
    this.props.dispatch(subjectSearch(subject));
  }

  /*valueToState =() =>{
    this.setState
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
          <Route
            path="/"
            render={props => {
              return <Homepage subjects={this.props.subjects} />;
            }}
          />
          <Route path="/logIn" exact component={LogIn} />
          <Route path="/SingIn" exact component={SingIn} />
        </Router>
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
