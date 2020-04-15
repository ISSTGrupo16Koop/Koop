import React from "react";
import "./App.css";
import LogIn from "./components/LogIn";
import SingIn from "./components/SingIn";
import Homepage from "./components/Homepage";
<<<<<<< HEAD
import logIn from "./components/LogIn";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
=======
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
>>>>>>> 411dbbb316d0088f9c272f210974f0e7560a30ab
import { connect } from "react-redux";
import { subjectSearch, initProfessors, initSubjects, loggedIn } from "./redux/actions";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.subjectSearchApp = this.subjectSearchApp.bind(this);
    this.logApp=this.logApp.bind(this);
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

  /*
  componentDidMount() {
    subjects = this.subjects;
    professors = this.professors;
    this.props.dispatch(initSubjects(subjects));
    this.props.dispatch(initProfessors(professors));
  }
*/

  

render() {
  if(true){
  return (

      <Router>
    
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
       <Switch> 
        <Route exact path="/">
                  <Homepage
                    subjects={this.props.subjects}
                    subjectSearchHome={this.subjectSearchApp}
                  />
          </Route>
        <Route path="/logIn">
          
           <LogIn />
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
            <Link to="/">Inicio</Link>
          </li>
          <li>
<<<<<<< HEAD
            <Link to="/profile">Perfil</Link>
=======
            <Link to="/logIn">Iniciar sesión</Link>
          </li>
          <li>
            <Link to="/singIn">Registrarse</Link>
>>>>>>> 411dbbb316d0088f9c272f210974f0e7560a30ab
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Homepage
              subjects={this.props.subjects}
              subjectSearchHome={this.subjectSearchApp}
<<<<<<< HEAD
              />

=======
            />
          </Route>
          <Route path="/logIn">
            <LogIn />
          </Route>
          <Route path="/singIn">
            <SingIn />
>>>>>>> 411dbbb316d0088f9c272f210974f0e7560a30ab
          </Route>
        </Switch>
      </Router>
    );
  }
}
}
function mapStateToProps(state) {
  return {
    ...state
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
