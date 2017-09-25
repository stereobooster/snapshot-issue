import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';
import AsyncLoad from './AsyncLoad';
import './App.css';

const Home = AsyncLoad({ loader: () => import('./Home') });
const About = AsyncLoad({ loader: () => import('./About') });

const active = { display: 'none' };

const NavCell = styled(NavLink)`
  display: block;
  margin-top: 10vh;
`;

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <NavCell exact to="/" activeStyle={ active }>Home</NavCell>
          <NavCell to="/about" activeStyle={ active }>About</NavCell>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}
