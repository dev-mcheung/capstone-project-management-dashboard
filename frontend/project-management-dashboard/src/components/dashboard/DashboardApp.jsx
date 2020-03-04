import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginComponent from "./LoginComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import DashboardComponent from "./DashboardComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";
import ManageUserComponent from "../administration/addUser.jsx";
import ErrorRoute from "./ErrorRoute.jsx";
import DashboardAddProject from "./DashboardAddProject.jsx";
import AuthenicatedRoute from "./AuthenicatedRoute.jsx";

export class DashboardApp extends Component {
  render() {
    return (
      <Router>
        <HeaderComponent />
        <Switch>
          <Route path={["/", "/login"]} exact component={LoginComponent} />
          <AuthenicatedRoute
            path="/dashboard"
            exact
            component={DashboardComponent}
          />
          <AuthenicatedRoute
            path="/dashboard/administration"
            exact
            component={ManageUserComponent}
          />
          <AuthenicatedRoute
            path="/dashboard/projects/add"
            exact
            component={DashboardAddProject}
          />
          <AuthenicatedRoute path="/logout" component={LogoutComponent} />
          <Route component={ErrorRoute} />
        </Switch>
        <FooterComponent />
      </Router>
    );
  }
}
