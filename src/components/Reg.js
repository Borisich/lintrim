import React from 'react';
import { connect } from 'react-redux'

import './Login.css';
import getHistory from '../utils/history';
import { SecurityController } from '../models/Security';


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
        if (this.state.psw !== this.state.psw2 || this.state.email.length === 0) {
            alert('Поля заполнены не верно!');
        }
        else {
            SecurityController.store.dispatch(SecurityController.register(this.state.email, this.state.psw)).then(res => {
                if (res) {
                    getHistory().push('/');
                } else {
                    alert ('error');
                }
            });
        }
    };

    __onLogin = () => {
        getHistory().push('/login');
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