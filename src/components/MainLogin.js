import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './Login.css';
import Login from './Login';
import Reg from './Reg';

const MainLogin = ({ match }) => (
    <div className="LoginContainer">
        <Route exact path={`${match.url}`} component={Login}/>
        <Route path={`${match.url}reg`} component={Reg}/>
    </div>
)

export default MainLogin