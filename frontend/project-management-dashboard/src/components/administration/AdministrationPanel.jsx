import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { ManageUserComponent, AddUser } from "./ManageUserComponent.jsx";

const routes = [
  {
    path: "/dashboard/administration/manage-users/add",
    main: () => <AddUser />
  },
  {
    path: "/dashboard/administration/manage-users",
    main: () => <ManageUserComponent />
  }
];

export default function AdministrationPanel() {
  return (
    <Router>
      <section className="hero is-halfheight">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-2">
              <p className="menu-label">Administration</p>
              <ul className="menu-list">
                <li>
                  <Link to="/dashboard/administration/manage-users">
                    Manage Users
                  </Link>
                </li>
              </ul>
            </div>
            <div className="column is-9">
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))}
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </Router>
  );
}
