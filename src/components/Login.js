import React from 'react';
import {
    Link,
    withRouter
} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css';
import BackendApi from '../utils/BackendAPI';
import getHistory from '../utils/history';

class Login extends React.Component {

    render(){
        return(
            <div>
                <div className="CenterСontainerLogin">
                    Вход
                    <div className="FormСontainer">
                        Email
                        <input className="Input" type="text"/>
                        <div className="Separate"/>

                        Пароль (Забыли?)
                        <input className="Input" type="password"/>
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
        BackendApi.getUsers();
    }
}

export default Login