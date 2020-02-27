import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthenicationService from './AuthenicationService';

class AuthenicatedRoute extends Component {
    render() {
        if(AuthenicationService.isLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }
    }
}

export default AuthenicatedRoute;