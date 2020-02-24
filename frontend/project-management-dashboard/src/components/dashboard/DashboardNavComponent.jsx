import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AuthenicationService from './AuthenicationService.js';

class DashboardNavComponent extends Component {
    render() {
        const getUsername = AuthenicationService.getUsername();
        return(
            <div className="container">
                <div className="level">
                    <div className="level-left">
                        <div className="field has-addons">
                            <input className="input" type="text" placeholder="Find a project">
                            </input>
                            <div className="control">
                                <a href="!#" className="button is-info">
                                    Search
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="level-right">
                        <Link to={`/users/${getUsername}/dashboard/projects/add`} className="button is-success">
                            New Project
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
} 

export default DashboardNavComponent;