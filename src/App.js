// import React, { Component } from 'react';
// import SideBar from './components/SideNavbar';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { NavigationBar } from './components/NavigationBar';

// import { Home } from './Home';
// import { About } from './About';

// import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css';
// import { Row, Col } from 'reactstrap';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <NavigationBar />

//           <Row>
//             <Col xs="3">
//               <div>
//                 <SideBar />
//               </div>
//             </Col>
//             <Col xs="9">
//             <div>
//               <Router>
//                 <Switch>
//                   <Route exact path="/Home" component={Home} />
//                   <Route path="/about" component={About} />
//            
//                 </Switch>
//               </Router>
//             </div>
//             </Col>
//           </Row>

//       </React.Fragment>
//     );
//   }
// }

// export default App;

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './components/Store'

import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Provider store={store}> 
      <Router>
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

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
              </Switch>
            </div>
          </div>
        </div></Router>
    </Provider>
  );
}

export default App;
