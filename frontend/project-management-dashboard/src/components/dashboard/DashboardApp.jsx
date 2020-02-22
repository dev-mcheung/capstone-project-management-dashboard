import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginComponent from './LoginComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import DashboardComponent from './DashboardComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import ManageUserComponent from '../administration/addUser.jsx';
import ErrorRoute from './ErrorRoute.jsx';
import DashboardAddProject from './DashboardAddProject.jsx';

class DashboardApp extends Component {
    render() {
        return(
            <Router>
                <HeaderComponent />
                <Switch>
                    <Route path="/" exact component={LoginComponent} />
                    <Route path="/login" component={LoginComponent} />
                    <Route path="/users/:name/dashboard" exact component={DashboardComponent} />
                    <Route path="/users/:name/dashboard/administration" exact component={ManageUserComponent} />
                    <Route path="/users/:name/dashboard/projects/add" exact component={DashboardAddProject} />
                    <Route path="/logout" component={LogoutComponent} />
                    <Route component={ErrorRoute} />
                </Switch>
                <FooterComponent />
            </Router>
        )
    }
}

export default DashboardApp