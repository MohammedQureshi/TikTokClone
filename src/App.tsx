import React from 'react';
import './App.css';
import Home from './pages/home/Home'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import UserResult from './pages/search/UserResult';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="@:username"/>
        <Route path="/search/:result">
          <UserResult/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
