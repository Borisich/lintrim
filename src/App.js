import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from  './components/Login';
import Main from  './components/Main';
import Module1 from  './components/Module1';
import Module2 from  './components/Module2';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class App extends Component {
  render() {

    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={Login}/>
                <Route path="/main" component={Main}/>
            </div>
        </Router>

    );
  }
}

export default App;
