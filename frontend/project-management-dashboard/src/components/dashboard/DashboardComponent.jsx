import React, {Component} from 'react';
import DashboardNavComponent from './DashboardNavComponent';
import DashboardDataService from '../../api/dashboard/DashboardDataService';
import moment from 'moment';
// import {DeleteConfirmation} from './DeleteConfirmation.js';

class DashboardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            showDeletePrompt: false
        }
        this.refreshProjects = this.refreshProjects.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
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

    handleOnClick(event) {
        if(this.state.showDeletePrompt) {
            return this.setState({showDeletePrompt: false});
        } else {
            return this.setState({showDeletePrompt: true});
        }
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
                                <th className="th">Delete</th>
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
                                            <td className="td">
                                                <button className="button is-danger is-small" type="button" onClick={this.handleOnClick}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    {this.state.showDeletePrompt ?
                        <div className="modal is-active">
                            <div className="modal-background"/>
                            <div className="modal-content">
                                <div className="container">
                                    <div className="message">
                                        <div className="message-header">Delete the current project?</div>
                                        <div className="message-body level">
                                            <section className="level-item">
                                                <button className="button is-success" onClick={this.handleOnClick}>Yes</button>
                                            </section>
                                            <section className="level-item">
                                                <button className="button is-danger" onClick={this.handleOnClick}>Cancel</button>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : false
                    }
                </div>
            </>
        )
    }
}

export default DashboardComponent