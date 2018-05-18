import React from 'react';
import {
    Link,
    withRouter
} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css';

const Button1 = withRouter(({ title, className, to, history }) => (
    <button
        className={className}
        type='button'
        onClick={() => { console.log(to); history.push(to) }}
    >
        {title}
    </button>
))

const Login = () => (
    <div className="LoginContainer">
        <div className="CenterСontainer">
            Вход
            <div className="FormСontainer">
                Email
                <input className="Input" type="text"/>
                <div className="Separate"/>

                Пароль (Забыли?)
                <input className="Input" type="password"/>
                <div className="Separate"/>
                <div className="ButtonСontainer">
                    <Button1 title='Войти' className={"ButtonLogin"} to={'/main'}/>
                </div>
            </div>
        </div>
        <div className="UnderСontainer">
            Еще не зарегистрированы?
            <Button1 title='Регистрация' className={"ButtonReg"} to={'/main'}/>
        </div>

    </div>
);

export default Login