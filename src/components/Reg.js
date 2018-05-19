import React from 'react';
import { connect } from 'react-redux'
import {
    Link,
    withRouter
} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css';
import BackendApi from '../utils/BackendAPI';
import getHistory from '../utils/history';


class Reg extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            psw: '',
            psw2: '',
        };
    }

    render(){
        return(
            <div>
                <div className="CenterСontainerReg">
                    Регистрация
                    <div className="FormСontainer">
                        Email
                        <input
                            className="Input"
                            type="text"
                            onChange={(event) => {
                                console.log(event.target.value);
                                this.setState({
                                    email: event.target.value
                                })
                            }}
                            value={this.state.email}
                        />
                        <div className="Separate"/>

                        Пароль
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

                        Повторите пароль
                        <input
                            className="Input"
                            type="password"
                            onChange={(event) => {
                                console.log(event.target.value);
                                this.setState({
                                    psw2: event.target.value
                                })
                            }}
                            value={this.state.psw2}
                        />
                        <div className="Separate"/>

                        <div className="ButtonСontainer">
                            <button className={'ButtonLogin'}
                                    type='button'
                                    onClick={this.__onReg}
                            >
                                Регистрация
                            </button>
                        </div>
                    </div>
                </div>
                <div className="UnderСontainer">
                    Уже зарегистрированы?
                    <button className={'ButtonReg'}
                        type='button'
                        onClick={this.__onLogin}
                    >
                        Войти
                    </button>
                </div>

            </div>
        );
    }

    __onReg = () => {
        if (this.state.psw !== this.state.psw2) {

        }
        //BackendApi.getUsers();
    };

    __onLogin = () => {
        getHistory().push('/');
    }
}
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
    return { dispatch };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Reg);