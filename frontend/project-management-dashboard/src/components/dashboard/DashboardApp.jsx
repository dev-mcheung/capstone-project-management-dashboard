import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginComponent from "./LoginComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import DashboardComponent from "./DashboardComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";
import AdministrationPanel from "../administration/AdministrationPanel.jsx";
import ErrorRoute from "./ErrorRoute.jsx";
import DashboardProjectsPage from "./DashboardProjectsPage.jsx";
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
            path={"/dashboard/administration"}
            exact
            component={AdministrationPanel}
          />
          <AuthenicatedRoute
            path={[
              "/dashboard/administration/manage-users",
              "/dashboard/administration/manage-users/add"
            ]}
            exact
            children={AdministrationPanel}
          />
          <AuthenicatedRoute
            path="/dashboard/projects/:id"
            exact
            component={DashboardProjectsPage}
          />
          <AuthenicatedRoute
            path="/dashboard/projects/edit/:id"
            exact
            component={DashboardProjectsPage}
          />
          <AuthenicatedRoute path="/logout" component={LogoutComponent} />
          <Route component={ErrorRoute} />
        </Switch>
        <FooterComponent />
      </Router>
    );
  }
}

export default DashboardApp;
