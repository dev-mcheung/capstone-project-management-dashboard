import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AuthenicationService from './AuthenicationService'

class HeaderComponent extends Component {
    render() {
        const isLoggedIn = AuthenicationService.isLoggedIn();
        return(
            <header>
                <nav className="navbar">
                    <div className="navbar-menu">
                        <div className="navbar-brand"><a className="navbar-item">Project Management Panel</a></div>
                        <div className="navbar-start">
                            {
                                isLoggedIn && <div className="navbar-item">
                                    <Link to={`/${AuthenicationService.getUsername()}/dashboard`}>Dashboard</Link>
                                </div>
                            }
                        </div>
                        {
                            isLoggedIn && <div className="navbar-end">
                                <div className="navbar-item has-dropdown is-hoverable">
                                    <a className="navbar-link">More</a>
                                    <div className="navbar-dropdown">
                                        <div className="navbar-item">
                                            <Link to="/logout" onClick={AuthenicationService.logoutUser}>Logout</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent