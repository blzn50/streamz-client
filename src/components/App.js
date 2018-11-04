import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation/Navigation';
import Home from './Layout/Home';
import Profile from './Profile/Profile';
import Watch from './Video/Watch';
import Signup from './Profile/Signup';
import Login from './Profile/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/user/:id" component={Profile} />
          <Route path="/watch/:id" component={Watch} />
        </Switch>
      </div>
    );
  }
}

export default App;
