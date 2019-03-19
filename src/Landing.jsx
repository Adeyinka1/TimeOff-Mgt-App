import React, { Component } from 'react';
import './App.css';
import maternity from './img/maternity.jpg';
import vacation from './img/vacation.jpg';

import { Button, Navbar, Nav, Jumbotron, Card, footer} from 'react-bootstrap';
import { Link } from "react-router-dom"; 

class App extends Component {
  render() {
    return (
      <div className="App">

      {/*Navbar Part  */}
      <Navbar className= "Navbar" bg="light" expand="lg">
        <Navbar.Brand href="#home">TimeOff Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Link to ="./Signin">
              <Nav.Link href="#link">Login</Nav.Link>
            </Link>
          
            <Nav.Link href="#link">Employee</Nav.Link>
         
            </Nav>
          </Navbar.Collapse>
      </Navbar>

      {/* Jumbotron section */}
      <Jumbotron className ='Jumbotron'>
        <h1>Lets plan your leave.</h1>
        <p>You need time to attend to perosnal things? lets help plan your leave...</p>
        <div className="Button">
            <Link to ="./Signup">
                <Button variant="primary">Sign Up</Button>
            </Link>
        </div>
      </Jumbotron>
      <div class="row">
      <div class="col-md-6">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={maternity} className="image"/>
        <Card.Body className="All">
          <Card.Title className="Title">You need a maternity leave?</Card.Title>
          <Card.Text className ="Text">You need maternity leave to be a befitting mother, take a leave!!!
          </Card.Text>
        </Card.Body>
      </Card>
      </div>

      <div class="col-md-6">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={vacation} className="image"/>
        <Card.Body className="All">
          <Card.Title className="Title">Time for family and friends?</Card.Title>
          <Card.Text className ="Text">Time with family should be a memorable one, use quality time with family and friends, take a leave!!!
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      </div>

      {/* Footer */}
      <footer>
        <p>copyright @ 2019 All right reserved</p>
      </footer> 
      </div>
      
    );
  }
}

export default App;
