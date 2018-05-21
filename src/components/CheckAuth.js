import React from 'react';
import { withRouter } from 'react-router';
import { SecurityController } from '../models/Security';
import  getHistory  from '../utils/history';

export default function requireAuth(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount() {
            this.checkAuth();
        }

        checkAuth() {
            if ( ! SecurityController.getToken()) {
                const location = this.props.location;
                const redirect = location.pathname + location.search;
                getHistory().replace('/login');
                //this.props.router.push(`/login?redirect=${redirect}`);
            }
        }

        render() {
            return SecurityController.getToken()
                ? <Component { ...this.props } />
                : null;
        }

    }

    return withRouter(AuthenticatedComponent);
}