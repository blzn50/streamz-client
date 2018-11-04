import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation/Navigation';
import Home from './Layout/Home';
import Profile from './Profile/Profile';
import Watch from './Video/Watch';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:id" component={Profile} />
          <Route exact path="/watch/:id" component={Watch} />
        </Switch>
      </div>
    );
  }
}

export default App;
