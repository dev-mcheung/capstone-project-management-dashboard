import React, {Component} from 'react';
import DashboardNavComponent from './DashboardNavComponent';
import AuthenicationService from './AuthenicationService';
import DashboardDataService from '../../api/dashboard/DashboardDataService';

class DashboardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }
        this.refreshProjects = this.refreshProjects.bind(this);
    }

    componentDidMount() {
        this.refreshProjects();
    }

    refreshProjects() {
        let username = AuthenicationService.getUsername;
        DashboardDataService.retrieveAllProjects()
            .then(
                response => {
                    console.log(response)
                    this.setState({projects : response.data})
                }
            )
    }

    render() {
        return(
            <>
                <DashboardNavComponent />
                <div className="container">
                    <table className="table">
                        <thead className="thead">
                            <tr className="tr">
                                <th className="th">Title</th>
                                <th className="th">Description</th>
                                <th className="th">Deadline</th>
                                <th className="th">Status</th>
                                <th className="th">Priority</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </>
        )
    }
}

export default DashboardComponent