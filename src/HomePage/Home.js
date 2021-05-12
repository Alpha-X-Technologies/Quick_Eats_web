import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { connect } from 'react-redux';

import SideBar from '../_components/SideNavbar';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { NavigationBar } from '../_components/NavigationBar';

import { userActions } from '../_actions';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Row, Col } from 'reactstrap';

export class HomePage extends Component {

  state = {
    user: null
  }
  // componentDidMount() {
  //   const user = localStorage.getItem('user');
  //   console.log('LocalStorage', user)
  //   this.state.user = user
  // }


  render() {
    const user = localStorage.getItem('user');
    this.state.user = user
    const userJson = JSON.parse(user)
    return (
      <React.Fragment>
        <NavigationBar />

        <Row>
          <Col xs="3">
            <div>
              <SideBar />
            </div>
          </Col>
          <Col xs="9">

            <div className="col-md-6 col-md-offset-3">
              <h1>Hi {userJson.user.name}!</h1>
              <p>You're logged in with React!!</p>
              <h3>Dashboard</h3>

              <p>
                <Link to="/login">Logout</Link>
              </p>
            </div>
          </Col>
        </Row>

      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => dispatch(userActions.getAll())

  };
}
const connectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default connectedHomePage;