import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Module1 from  './Module1';
import Module2 from  './Module2';

const Main = ({ match }) => (
    <div>
        <h2>Main</h2>

        <li><Link to="/">Back to login page</Link></li>
        <li><Link to="/main/module1">module1</Link></li>
        <li><Link to={`${match.url}/module2`}>module2</Link></li>

        <Route path={`${match.url}/module1`} component={Module1}/>
        <Route path={`${match.url}/module2`} component={Module2}/>
    </div>
)

export default Main