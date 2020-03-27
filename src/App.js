import React from "react";
import "./App.css";
import LogIn from "./components/LogIn";
import SingIn from "./components/SingIn";
import Homepage from "./components/Homepage";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { subjectSearch, initProfessors, initSubjects } from "./redux/actions";

class App extends React.Component {
  constructor(props) {
    super(props);

    //this.subjectSearchApp = this.subjectSearchApp.bind(this);
  }

  subjectSearchApp(subject) {
    console.log("Se ha escrito ");
    console.log("changed", { subject });
    this.props.dispatch(subjectSearch(subject));
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
              return (
                <div>
                  <div>
                    <input
                      placeholder="Asignatura"
                      onChange={event =>
                        this.subjectSearchApp(event.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Homepage
                      subjects={this.props.subjects}
                      subjectSearchHome={this.subjectSearchApp}
                    />
                  </div>
                </div>
              );
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
