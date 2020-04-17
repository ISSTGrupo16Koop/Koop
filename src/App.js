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
    //this.subjectSearchApp = this.subjectSearchApp.bind(this);
    this.logApp = this.logApp.bind(this);
    this.searchApp = this.searchApp.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  /*
  subjectSearchApp(subject) {
    console.log("Se ha escrito ");
    console.log("changed", { subject });
    this.props.dispatch(subjectSearch(subject));
  }
  */
  searchApp(subject) {
    this.props.dispatch(subjectSearch(true, subject));
  }

  logApp(user) {
    this.props.dispatch(loggedIn(true, user));
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
              <Link to="/" replace>
                ¿qué hacemos?
              </Link>
            </li>
            <li class="flex-item">
              <Link to="/" replace>
                top profesores
              </Link>
            </li>
            <li class="flex-item">
              <Link to="/" replace>
                preguntas frecuentes
              </Link>
            </li>
            <li class="flex-item">
              <Link to="/" replace>
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
                searchHome={this.searchApp}
                subject={this.props.subject}
                searching={this.props.searching}
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
              <Link to="/profile" replace>
                <Button type="button" text="mi perfil" />
              </Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Homepage
                searchHome={this.searchApp}
                subjects={this.props.subjects}
                searching={this.props.searching}
              />
              <div>
                <Button text="salir" onClick={this.logOut} />
              </div>
            </Route>
            <Route exact path="/profile">
              <Profile user={this.props.userLogged} />
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
