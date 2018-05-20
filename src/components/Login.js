import React from 'react';
import {
    Link,
    withRouter
} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css';
import BackendApi from '../utils/BackendAPI';
import getHistory from '../utils/history';

import { UsersController } from '../models/User';
import { SecurityController } from '../models/Security';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            psw: '',
        };
    }

    render(){
        return(
            <div>
                <div className="CenterСontainerLogin">
                    Вход
                    <div className="FormСontainer">
                        Email
                        <input
                            className="Input"
                            type="text"
                            onChange={(event) => {
                                this.setState({
                                    email: event.target.value
                                })
                            }}
                            value={this.state.email}
                        />
                        <div className="Separate"/>

                        Пароль (Забыли?)
                        <input
                            className="Input"
                            type="password"
                            onChange={(event) => {
                                this.setState({
                                    psw: event.target.value
                                })
                            }}
                            value={this.state.psw}
                        />
                        <div className="Separate"/>
                        <div className="ButtonСontainer">
                            <button className={'ButtonLogin'}
                                    type='button'
                                    onClick={this.__onLogin}
                            >
                                Войти
                            </button>
                        </div>
                    </div>
                </div>
                <div className="UnderСontainer">
                    Еще не зарегистрированы?
                    <button className={'ButtonReg'}
                        type='button'
                        onClick={this.__onReg}
                    >
                        Регистрация
                    </button>
                </div>

            </div>
        );
    }

    __onReg = () => {
        getHistory().push('/reg');
    };

    __onLogin = () => {
        SecurityController.store.dispatch(SecurityController.login(this.state.email, this.state.psw)).then(res => {
            if (res) {
                getHistory().push('/main');
            } else {
                alert ('error');
            }
        });
    }
}

export default Login