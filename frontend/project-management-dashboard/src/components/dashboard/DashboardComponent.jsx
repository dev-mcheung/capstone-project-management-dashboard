import React, {Component} from 'react';
import DashboardNavComponent from './DashboardNavComponent';
import DashboardDataService from '../../api/dashboard/DashboardDataService';
import moment from 'moment';

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
                                <th className="th">Status</th>
                                <th className="th">Deadline</th>
                                <th className="th">Priority</th>
                            </tr>
                        </thead>
                        <tbody className="tbody">
                            {
                                this.state.projects.map(
                                    project =>
                                        <tr className="tr" key={project.project_id}>
                                            <td className="td">
                                                {project.title}
                                            </td>
                                            <td className="td">
                                                {project.description}
                                            </td>
                                            <td className="td">
                                                {project.currentStatus}
                                            </td>
                                            <td className="td">
                                                {moment(project.deadline).format("MM/DD/YYYY")}
                                            </td>
                                            <td className="td">
                                                {project.priority}
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default DashboardComponent