import BackendAPI from '../utils/BackendAPI';
import { SecurityController } from './Security';

export const UserAction = {
    LOAD_USERS: "UserAction.LOAD_USERS",
}

export class UserModel {
    users = []
}

const initState = new UserModel();

export class UsersController {

    static store = null;

    init(store) {
        UsersController.store = store;
    }

    //********************************************
    //**** Getters & Util functions
    //********************************************



    //********************************************
    //**** Reducer
    //********************************************

    reduce(state = initState, action) {
        console.log("REDUCE_GL", action);
        if (action.type === UserAction.LOAD_USERS) {
            console.log("LOAD_USERS", action);

            return Object.assign({}, state, {
                users: action.payload,
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

    static loadUsers() {
        let token = SecurityController.getToken();

        return ( dispatch ) => {
            return BackendAPI.request(BackendAPI.host + 'users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-access-token': token,
                },
                body: null,
            }).then(res => {
                console.log(res);
                dispatch({type: UserAction.LOAD_USERS, payload: res});
                return res;
            })
        }
    }




}