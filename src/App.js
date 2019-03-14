import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cloud from './img/cloud.png';
import { Button, Navbar, Nav, Jumbotron, Card, footer } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar className= "Navbar" bg="light" expand="lg">
        <Navbar.Brand href="#home">TimeOff Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Pricing</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
      </Navbar>
      <Jumbotron className ='Jumbotron'>
        <h1>TimeOff Management App</h1>
        <p>Open source, simple yet powerful absence management software for small and medium size business.
            Endorsed by hundreds of software developers</p>
        <p>
          <Button variant="primary">Sign Up</Button>
        </p>
      </Jumbotron>
      <div class="row">
      <div class="col-md-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cloud} />
        <Card.Body className="All">
          <Card.Title className="Title">Use within own infrastructure</Card.Title>
          <Card.Text className ="Text">Use within own infrastructure.Host application within your own infrastructure.As an open source 
            software TimeOff.Management could be deployed into customer server without any enquires, not even email 
            is needed! Integrate with own LDAP server.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div class="col-md-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cloud} />
        <Card.Body className="All">
          <Card.Title className="Title">Host in a cloud</Card.Title>
          <Card.Text className ="Text">For as little as 0.50 USD per person per month! With 30 days trial.Just create an 
          account and start using the application. We will issue PayPal invoice by the end of second month.Please contact 
          us for more details.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div class="col-md-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cloud} />
        <Card.Body className="All">
          <Card.Title className="Title">Simple and flexible</Card.Title>
          <Card.Text className ="Text">Fits into your organisation's workflow rather than force you to adopt it!Automated 
          account setup and very intuitive user interface.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      </div>
      <footer>
        <p>copyright @ 2019 All right reserved</p>
      </footer> 
      </div>
    );
  }
}

export default App;
