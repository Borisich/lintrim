import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from  './components/Login';
import Main from  './components/Main';
import MainLogin from  './components/MainLogin';
import Module1 from  './components/Module1';
import Module2 from  './components/Module2';
import { GlobalHistory } from './utils/history';
import requireAuth from './components/CheckAuth';
import { SecurityController } from './models/Security';

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
                <GlobalHistory />
                <Route path="/login" component={MainLogin}/>
                <Route path="/" component={requireAuth(Main)}/>
            </div>
        </Router>

    );
  }
}

export default App;
