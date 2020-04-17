import React from "react";
import "./App.css";
import SingIn from "./components/SingIn";
import Homepage from "./components/Homepage";
import logoKoopap from "./assets/logoKoopap.png";
import Button from "./components/Button";

import Profile from "./components/Profile";
import LogIn from "./components/LogIn";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import {
  subjectSearch,
  initProfessors,
  initSubjects,
  loggedIn,
} from "./redux/actions";
import { combineReducers } from "redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.subjectSearchApp = this.subjectSearchApp.bind(this);
    this.logApp = this.logApp.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  subjectSearchApp(subject) {
    console.log("Se ha escrito ");
    console.log("changed", { subject });
    this.props.dispatch(subjectSearch(subject));
  }

  logApp() {
    console.log("Se ha escrito");
    this.props.dispatch(loggedIn(true));
  }

  logOut() {
    this.props.dispatch(loggedIn(false));
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
    if (this.props.isLogged === false) {
      return (
        <Router>
          <ul class="container">
            <li>
              <Link to="/" replace>
                <img src={logoKoopap} class="logo" />
              </Link>
            </li>

            <li class="flex-item">
              <Link to="/quehacemos" replace>
                ¿qué hacemos?
              </Link>
            </li>
            <li class="flex-item">
              <Link to="/profesores" replace>
                top profesores
              </Link>
            </li>
            <li class="flex-item">
              <Link to="/preguntasfrecuentes" replace>
                preguntas frecuentes
              </Link>
            </li>
            <li class="flex-item">
              <Link to="/soporte" replace>
                soporte
              </Link>
            </li>

            <li class="flex-item">
              <Link to="/logIn" replace>
                <Button text="entrar" />
              </Link>
            </li>
            <li class="flex-item">
              <Link to="/singIn" replace>
                <Button text="registrarse" />
              </Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Homepage
                subjects={this.props.subjects}
                subjectSearchHome={this.subjectSearchApp}
              />
            </Route>
            <Route path="/logIn">
              <LogIn logApp={this.logApp} />
            </Route>
            <Route path="/singIn">
              <SingIn />
            </Route>
          </Switch>
        </Router>
      );
    } else {
      return (
        <Router>
          <ul class="container">
            <li class="flex-item">
              <Link to="/" replace>
                <img src={logoKoopap} class="logo" />
              </Link>
            </li>
            <li class="flex-item">
              <Link to="/quehacemos" replace>
                ¿qué hacemos?
              </Link>
            </li>
            <li class="flex-item">
              <Link to="/profesores" replace>
                top profesores
              </Link>
            </li>
            <li class="flex-item">
              <Link to="/preguntasfrecuentes" replace>
                preguntas frecuentes
              </Link>
            </li>
            <li class="flex-item">
              <Link to="/soporte" replace>
                soporte
              </Link>
            </li>
            <li class="flex-item">
              <Link to="/profile" replace>
                <Button type="button" text="mi perfil" />
              </Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Homepage
                subjects={this.props.subjects}
                subjectSearchHome={this.subjectSearchApp}
              />
              <div>
                <Button text="salir" onClick={this.logOut} />
              </div>
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Router>
      );
    }
  }
}
function mapStateToProps(state) {
  return {
    ...state,
  };
}
export default connect(mapStateToProps)(App);
