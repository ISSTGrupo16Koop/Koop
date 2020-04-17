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
  endSearch,
  logIn,
  logOut,
  userProfessor,
  userStudent,
} from "./redux/actions";
import { combineReducers } from "redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logApp = this.logApp.bind(this);
    this.searchApp = this.searchApp.bind(this);
    this.home = this.home.bind(this);
    this.logOut = this.logOut.bind(this);
    this.changeProfessorApp = this.changeProfessorApp.bind(this);
    this.changeStudentApp = this.changeStudentApp.bind(this);
  }
  searchApp(subject) {
    this.props.dispatch(subjectSearch(true, subject));
  }

  logApp(user) {
    this.props.dispatch(logIn(true, user));
    this.homeAfterLog();
  }

  logOut() {
    this.props.dispatch(logOut(false));
    this.homeAfterLog();
  }

  homeAfterLog() {
    document.getElementById("home").click();
  }

  home() {
    this.props.dispatch(endSearch(false));
  }

  changeProfessorApp() {
    this.props.dispatch(userProfessor(true));
  }

  changeStudentApp() {
    this.props.dispatch(userStudent(false));
  }

  render() {
    let linkLog;
    let linkSing;
    let linkProfile;
    let routeLog;
    let routeSing;
    let routeProfile;
    let logout;
    console.log(this.props.isLogged);
    if (this.props.isLogged === false) {
      linkLog = (
        <li class="flex-item">
          <Link to="/login" replace>
            <Button text="entrar" />
          </Link>
        </li>
      );

      linkSing = (
        <li class="flex-item">
          <Link to="/singIn" replace>
            <Button text="registrarse" />
          </Link>
        </li>
      );

      routeLog = (
        <Route path="/logIn">
          <LogIn logApp={this.logApp} />
        </Route>
      );

      routeSing = (
        <Route path="/singIn">
          <SingIn />
        </Route>
      );
    } else {
      linkProfile = (
        <li class="flex-item">
          <Link to="/profile" replace>
            <Button type="button" text="mi perfil" />
          </Link>
        </li>
      );

      logout = (
        <li class="flex-item">
          <Button text="log out" action={this.logOut} />
        </li>
      );

      routeProfile = (
        <Route exact path="/profile">
          <Profile
            user={this.props.userLogged}
            userView={this.props.userView}
            changeProfessorApp={this.changeProfessorApp}
            changeStudentApp={this.changeStudentApp}
          />
        </Route>
      );
    }

    return (
      <Router>
        <ul class="container">
          <li>
            <Link to="/" id="home" onClick={this.home} replace>
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
          {linkLog}
          {linkSing}
          {linkProfile}
          {logout}
        </ul>
        <Switch>
          <Route exact path="/">
            <Homepage
              searchHome={this.searchApp}
              subject={this.props.subject}
              searching={this.props.searching}
              isLogged={this.props.isLogged}
            />
          </Route>
          {routeLog}
          {routeSing}
          {routeProfile}
        </Switch>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state,
  };
}
export default connect(mapStateToProps)(App);
