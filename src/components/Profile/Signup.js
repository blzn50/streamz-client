import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Signup.css';

class Signup extends Component {
  render() {
    return (
      <Form className="signUp">
        <h3>
          Create an Account
          <span className="miniTitle">It's Free!</span>
        </h3>
        <hr />
        <FormGroup>
          <Label for="fullName">Full name</Label>
          <Input name="fullName" type="text" id="fullName" placeholder="Enter your full name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input name="email" type="email" id="email" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input name="password" type="password" id="password" placeholder="Enter your password" />
        </FormGroup>
        <Button color="success">Sign Up</Button>
      </Form>
    );
  }
}

export default Signup;
