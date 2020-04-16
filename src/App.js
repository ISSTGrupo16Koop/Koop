import React from "react";
import "./App.css";
import LogIn from "./components/LogIn";
import SingIn from "./components/SingIn";
import Homepage from "./components/Homepage";
import logIn from "./components/LogIn";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { subjectSearch, initProfessors, initSubjects, loggedIn } from "./redux/actions";
import { combineReducers } from "redux";

class App extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    //this.subjectSearchApp = this.subjectSearchApp.bind(this);
=======

    this.subjectSearchApp = this.subjectSearchApp.bind(this);
    this.logApp=this.logApp.bind(this);
    this.logOut=this.logOut.bind(this);
>>>>>>> dda1933817aed4fb262115eefa3f8cfb6ef9bd8e
  }

  subjectSearchApp(subject) {
    console.log("Se ha escrito ");
    console.log("changed", { subject });
    this.props.dispatch(subjectSearch(subject));
  }

  logApp(){
    console.log("Se ha escrito");
    this.props.dispatch(loggedIn(true));
  } 

  logOut(){
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
  if(this.props.isLogged === false){
  return (

      <Router>
    
          <ul>
            <li>
              <Link to="/" replace>Inicio</Link>
            </li>
            <li>
            <Link to="/logIn" replace>Iniciar sesión</Link>
            </li>
            <li>
              <Link to="/singIn" replace>Registrarse</Link>
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
            <LogIn
              logApp={this.logApp}
            />
        </Route>
        <Route path="/singIn">
           <SingIn />
        </Route>
        </Switch>
      </Router>
  );
  }else{
    return (
      <Router>
        <ul>
          <li>
            <Link to="/" replace>Inicio</Link>
          </li>
          <li>
            <Link to="/profile" replace>Perfil</Link>
           
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Homepage
              subjects={this.props.subjects}
              subjectSearchHome={this.subjectSearchApp}
              />
               <div>
            <button type="button" onClick={this.logOut}>Salir</button>
            </div>
            
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
/*

                  <div>
                    <input
                      placeholder="Asignatura"
                      onChange={event =>
                        this.subjectSearchApp(event.target.value)
                      }
                    />
                  </div>
                  <div>
                    <form onSubmit={value => this.subjectSearchApp(value)}>
                      <label>
                        Asignatura:
                        <input type="text" subject="subject" />
                      </label>
                      <input type="submit" value="Submit" />
                    </form>
                  </div>
                  */
