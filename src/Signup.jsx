import React, { Component } from 'react';
import './App.css';
import {Navbar, Nav, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


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
        fields["companyname"] = "";
        fields["username"] = "";
        fields["emailid"] = "";
        fields["mobileno"] = "";
        fields["age"] = "";
        fields["work"] = "";
        fields["department"] = "";
        fields["manager"] = "";
        fields["password"] = "";
        fields["confirmpassword"] = "";
        fields["country"] = "";
        fields["timezone"] = "";
        fields["date"] = "";
        this.setState({fields:fields});
        alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your name.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }  
    
    if (!fields["country"]) {
      formIsValid = false;
      errors["country"] = "*Please select a country.";
    }
    if (!fields["date"]) {
      formIsValid = false;
      errors["date"] = "*Please select a day, month and year.";
    }
    if (!fields["timezone"]) {
      formIsValid = false;
      errors["timezone"] = "*Please select a Time-zone.";
    }

    if (!fields["department"]) {
      formIsValid = false;
      errors["department"] = "*Please enter the name of your dept.";
    }

    if (typeof fields["department"] !== "undefined") {
      if (!fields["department"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["department"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["manager"]) {
      formIsValid = false;
      errors["manager"] = "*Please enter your Manager's name.";
    }

    if (typeof fields["manager"] !== "undefined") {
      if (!fields["manager"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["manager"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["work"]) {
      formIsValid = false;
      errors["work"] = "*Please enter the type of work you do.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }
    
    if (!fields["companyname"]) {
      formIsValid = false;
      errors["companyname"] = "*Please enter your Company name.";
    }

    if (typeof fields["companyname"] !== "undefined") {
      if (!fields["companyname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["companyname"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["age"]) {
      formIsValid = false;
      errors["age"] = "*Please enter your Age.";
    }

    if (typeof fields["age"] !== "undefined") {
      if (!fields["age"].match(/\d/)) {
        formIsValid = false;
        errors["age"] = "*Please enter number characters only.";
      }
    }
    if (typeof fields["age"] !== "undefined") {
      if (fields["age"].match(/\d/) && fields['age'] < 18 ) {
        formIsValid = false;
        errors["age"] = "*please, only people above 18 can register.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter a minimum of eight characters with at least a number and a letter .";
      }
    }
    if (fields["password"] === fields['confirmpassword']){
        formIsValid = false;
    }
    if (fields["password"] !== fields['confirmpassword']){
        formIsValid = false;
        errors["confirmpassword"] = "Password does not match"
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }

    render() {
      return (
        <div className="App">
          <Navbar className= "Navbar" bg="light" expand="lg">
          <Navbar.Brand href="/">TimeOff Management</Navbar.Brand>
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

        {/* Form */}
        <Form>
          <h1 className ="signupHeader">SIGN UP</h1>
          <Form.Group controlId="formBasicName">
            <Form.Label className="label">Name</Form.Label>
            <Form.Control className="formControl" type="text" placeholder="Enter your name(Surname First)" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="label">Email address</Form.Label>
            <Form.Control className="formControl" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicDOB">
            <Form.Label className="label">Date of Birth</Form.Label>
            <Form.Control className="formControl" type="date" />
          </Form.Group>

          <Form.Group controlId="formBasicage">
            <Form.Label className="label">Age</Form.Label>
            <Form.Control className="formControl" type="number" />
          </Form.Group>

          <Form.Group controlId="formBasicCompanyName">
            <Form.Label className="label">Company's name</Form.Label>
            <Form.Control className="formControl" type="text" />
          </Form.Group>

          <Form.Group controlId="formBasicDepartment">
            <Form.Label className="label">Department</Form.Label>
              <select className = "select">
              <option selected = "selected">Sales</option>
              <option>IT</option>
              <option>Logistics</option>
              <option>Accounting and Finance</option>
              <option>Marketting</option>
              <option>Reaserch and Development</option>
              <option>HR</option>
              <option>Media</option>
              <option>Administrative</option>
              <option>Transport</option>
              </select>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control className="formControl" type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicCPassword">
            <Form.Label className="label">Confirm Password</Form.Label>
            <Form.Control className="formControl" type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Form.Group controlId="formBasicCountry">
            <Form.Label className="label">Country</Form.Label>
            <Form.Control className="formControl" type="text"/>
          </Form.Group>

          <Form.Group controlId="formBasicTimezone">
            <Form.Label className="label">Time Zone</Form.Label>
            <Form.Control className="formControl" type="time" />
          </Form.Group>

          <Button className="signupButton"variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        
        <footer>
          <p>copyright @ 2019 All right reserved</p>
        </footer> 

        </div>
        );
    }
}