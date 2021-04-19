import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { connect } from 'react-redux';

import SideBar from '../_components/SideNavbar';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { NavigationBar } from '../_components/NavigationBar';

import { userActions } from '../_actions';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Row, Col } from 'reactstrap';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id);
  }

  render() {
    const { user, users } = this.props;
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
              <h1>Hi {user.firstName}!</h1>
              <p>You're logged in with React!!</p>
              <h3>All registered users:</h3>
              {users.loading && <em>Loading users...</em>}
              {users.error && <span className="text-danger">ERROR: {users.error}</span>}
              {users.items &&
                <ul>
                  {users.items.map((user, index) =>
                    <li key={user.id}>
                      {user.firstName + ' ' + user.lastName}
                      {
                        user.deleting ? <em> - Deleting...</em>
                          : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                            : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                      }
                    </li>
                  )}
                </ul>
              }
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

function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };