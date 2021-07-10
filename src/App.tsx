import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home'

import { Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
