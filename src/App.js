import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Landing";
import Signup from "./Signup";
import Signin from './Signin';
import Dashboard from './Dashboard';
// import AbsenceRequest from './AbsenceRequest';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Route exact path="/" component={Landing} exact/>  
          <Route path="/Signup" component={Signup} />
          <Route path="/Signin" component={Signin} /> 
          <Route path="/Dashboard" component={Dashboard} />
          {/* <Route path="/AbsenceRequest" component={AbsenceRequest} /> */}

        </div>
      </Router>
    );
  }
}

export default App;