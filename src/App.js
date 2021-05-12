import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router, Switch, Route, Link } from "react-router-dom";

import { history } from './_helpers';
import { HomePage } from './HomePage';

import {alertActions} from './_actions'
import {connect} from 'react-redux'
import { PrivateRoute } from './_components';


import Login from "./LoginPage/Login";
import SignUp from "./RegisterPage/SignUp";

class App extends React.Component {

  constructor(props) {
    super(props);

    const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
  }
  render() {
    return (
      <Router history={history}>
          <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
                <Link className="navbar-brand" to={"/sign-in"}>Quick Eats</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-in"}>Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <div className="auth-wrapper">
              <div className="auth-inner">
                  <Route path="/sign-in" component={Login} />
                  <Route path="/sign-up" component={SignUp} />
              </div>
            </div>
            </Switch>
          </div>
          </Router>
    );

  }
}
function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 