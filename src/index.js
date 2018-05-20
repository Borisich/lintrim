import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import todoApp from './reducers'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { UsersController} from "./models/User";
import { SecurityController} from "./models/Security";

import 'bootstrap/dist/css/bootstrap.min.css';

const controllers = {
    user: new UsersController(),
    security: new SecurityController()
};

const store = createStore(combineReducers({
    user: controllers.user.reduce,
    security: controllers.security.reduce,
}), compose(
    applyMiddleware(thunk),
    //offline(customConfig)
));

for ( let key in controllers ) {
    let reducer = controllers[key];
    if ( typeof reducer.init === 'function' )
        reducer.init(store);
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();
