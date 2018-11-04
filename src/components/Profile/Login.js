import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Signup.css';

class Login extends Component {
  render() {
    return (
      <Form className="signUp">
        <h3>Login</h3>
        <hr />
        <FormGroup>
          <Label for="email">Email</Label>
          <Input name="email" type="email" id="email" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input name="password" type="password" id="password" placeholder="Enter your password" />
        </FormGroup>
        <Button color="primary">Login</Button>
      </Form>
    );
  }
}

export default Login;
