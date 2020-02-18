import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginComponent from './LoginComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import DashboardComponent from './DashboardComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import ManageUserComponent from './ManageUserComponent.jsx';

class DashboardApp extends Component {
    render() {
        return(
            <Router>
                <div>
                    <Router>
                            <HeaderComponent />
                            <Switch>
                                <Route path="/" exact component={LoginComponent} />
                                <Route path="/login" component={LoginComponent} />
                                <Route path="/dashboard" component={DashboardComponent} />
                                <Route path="/logout" component={LogoutComponent} />
                                <Route path="/manage-users" component={ManageUserComponent} />
                            </Switch>
                            <FooterComponent />
                    </Router>
                </div>
            </Router>
        )
    }
}

export default DashboardApp