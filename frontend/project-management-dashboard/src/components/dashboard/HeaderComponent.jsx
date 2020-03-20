import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import AuthenicationService from "./AuthenicationService";

class HeaderComponent extends Component {
  render() {
    const isLoggedIn = AuthenicationService.isLoggedIn();
    const username = AuthenicationService.getUsername();
    return (
      <header>
        <nav className="navbar is-spaced">
          <div className="navbar-menu">
            <div className="navbar-brand">
              <a href="!#" className="navbar-item">
                Project Management Panel
              </a>
            </div>
            <div className="navbar-start">
              {isLoggedIn && (
                <div className="navbar-item">
                  <Link to={"/dashboard"}>Dashboard</Link>
                </div>
              )}
              {isLoggedIn && (
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link
                    to={"/dashboard/administration"}
                    className="navbar-link"
                  >
                    Administration
                  </Link>
                  <div className="navbar-dropdown">
                    <div className="navbar-item">
                      <Link to={`/dashboard/administration/manage-users`}>
                        Manage Users
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {isLoggedIn && (
              <div className="navbar-end">
                <div className="navbar-item has-dropdown is-hoverable">
                  <a href="!#" className="navbar-link">
                    Hi {username}
                  </a>
                  <div className="navbar-dropdown">
                    <div className="navbar-item">
                      <Link
                        to="/logout"
                        onClick={AuthenicationService.jwtLogout}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(HeaderComponent);
