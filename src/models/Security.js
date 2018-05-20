import BackendAPI from '../utils/BackendAPI';
import md5 from 'md5';

export const SecurityAction = {
    LOGIN: "SecurityAction.LOGIN",
}

export class SecurityModel {
    userId = null;
    token = null;
}

const initState = new SecurityModel();

export class SecurityController {

    static store = null;

    init(store) {
        SecurityController.store = store;
    }

    //********************************************
    //**** Getters & Util functions
    //********************************************

    static getToken() {
        return SecurityController.store.getState().security.token;
    }

    //********************************************
    //**** Reducer
    //********************************************

    reduce(state = initState, action) {
        if (action.type === SecurityAction.LOGIN) {
            console.log("LOGIN", action);

            return Object.assign({}, state, {
                userId: action.payload.user_id,
                token: action.payload.token
            })
        }

        return state;
    }

    //********************************************
    //**** Actionns
    //********************************************


    //********************************************
    //**** Middleware methods
    //********************************************


    static login(email, password) {
        return ( dispatch ) => {
            let body = {
                username: email,
                password: md5(password)
            };
            return BackendAPI.request(BackendAPI.host + 'login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
            }).then(res => {
                console.log(res);
                if (res && res.ok) {
                    dispatch({type: SecurityAction.LOGIN, payload: res});
                    return true
                } else {
                    return false
                }
            })
        }
    }

    static register(email, password) {
        return ( dispatch ) => {
            let body = {
                username: email,
                password: md5(password)
            };
            return BackendAPI.request(BackendAPI.host + 'register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
            }).then(res => {
                console.log(res);
                if (res && res.ok) {
                    dispatch({type: SecurityAction.LOGIN, payload: res});
                    return true
                } else {
                    return false
                }
            })
        }
    }


}