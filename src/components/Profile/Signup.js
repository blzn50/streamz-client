import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Signup.css';

class Signup extends Component {
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
        <Button color="success">Sign Up</Button>
      </Form>
    );
  }
}

export default Signup;
