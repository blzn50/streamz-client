import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Signup.css';

class Login extends Component {
  state = {
    visiblePass: true,
  };

  toggleIcon = () => {
    this.setState({
      visiblePass: !this.state.visiblePass,
    });
  };

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
          <Input
            name="password"
            type={this.state.visiblePass ? 'password' : 'text'}
            id="password"
            placeholder="Enter your password"
          />
          <FontAwesomeIcon
            className="eye-icon"
            onClick={this.toggleIcon}
            icon={this.state.visiblePass ? faEye : faEyeSlash}
          />
        </FormGroup>
        <Button color="primary">Login</Button>
      </Form>
    );
  }
}

export default Login;
