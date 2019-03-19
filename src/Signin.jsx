import React, { Component } from 'react';
import './App.css';

import { Form, Navbar, Nav, Button, footer} from 'react-bootstrap';
import { Link } from "react-router-dom"; 

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["emailid"] = "";
    fields["password"] = "";
        this.setState({fields:fields});
        alert("Login successful");
        
        
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;


    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "Please enter a valid Email-ID.";
      }
    }


    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter a minimum of eight characters with at least a number and a letter.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }
  render() {
    return (
      <div className="App">

      {/*Navbar Part  */}
      <Navbar className= "Navbar" bg="light" expand="lg">
        <Navbar.Brand href="/">TimeOff Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Link to ="./Signin">
                <Nav.Link>Login</Nav.Link>
            </Link>
            <Link to = "./Dashboard">
              <Nav.Link href="#link">Employee</Nav.Link>
            </Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

      {/* Form */}
      <Form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}>
        <Form.Group controlId="formGroupEmail">
            <Form.Label className="label" name="emailid">Email address</Form.Label>
            <Form.Control className="formControl" type="email" placeholder="Enter email" value={this.state.fields.emailid} onChange={this.handleChange}/>
            <div className="errorMsg">{this.state.errors.emailid}</div>
        </Form.Group>

        <Form.Group controlId="formGroupPassword">
            <Form.Label className="label" name="password">Password</Form.Label>
            <Form.Control className="formControl"  type="password" placeholder="Password" value={this.state.fields.password} onChange={this.handleChange}/>
            <div className="errorMsg">{this.state.errors.password}</div>
        </Form.Group>

        <Button className="signupButton"variant="primary" type="submit">Submit</Button>
      <p className="parag"><Link to="">Forgot password?</Link> || <Link to="/Signup">Create account</Link></p>
      </Form>

      
      {/* Footer */}
      <footer id="footer">copyright @ 2019 All right reserved</footer> 
      </div>
      
    );
  }
}
