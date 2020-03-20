import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashboardDataService from "../../api/dashboard/DashboardDataService";
import moment from "moment";
import AuthenicationService from "./AuthenicationService";

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      filterProjects: [],
      showDeletePrompt: false,
      trackProjectId: 0
    };
    this.refreshProjects = this.refreshProjects.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  componentDidMount() {
    this.refreshProjects();
  }

  refreshProjects() {
    DashboardDataService.retrieveAllProjects().then(response => {
      this.setState({ projects: response.data, filterProjects: response.data });
    });
  }

  deleteProject(id) {
    let username = AuthenicationService.getUsername();
    DashboardDataService.deleteProject(username, id).then(() => {
      this.setState({ showDeletePrompt: false });
      this.refreshProjects();
    });
  }

  handleEditButton(id) {
    this.props.history.push(`dashboard/projects/edit/${id}`);
  }

  handleOnClick(id) {
    if (this.state.showDeletePrompt) {
      return this.setState({ showDeletePrompt: false });
    } else {
      this.setState({ trackProjectId: id });
      return this.setState({ showDeletePrompt: true });
    }
  }

  handleChange(event) {
    this.setState({ filterProjects: this.state.projects });
  }

  filterList(event) {
    const updatedList = this.state.projects.filter(item => {
      return (
        item.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ filterProjects: updatedList });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="field has-addons">
                <input
                  className="input"
                  type="text"
                  placeholder="Find a project"
                  onClick={this.handleChange}
                  onChange={this.filterList}
                ></input>
              </div>
            </div>
            <div className="level-right">
              <Link
                to={`/dashboard/projects/add`}
                className="button is-success"
              >
                New Project
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <table className="table is-hoverable is-striped">
            <thead className="thead">
              <tr className="tr">
                <th className="th">Title</th>
                <th className="th">Description</th>
                <th className="th">Status</th>
                <th className="th">Deadline</th>
                <th className="th">Priority</th>
                <th className="th">Edit</th>
                <th className="th">Delete</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {this.state.filterProjects.map(project => (
                <tr className="tr" key={project.project_id}>
                  <td className="td">{project.title}</td>
                  <td className="td">{project.description}</td>
                  <td className="td">{project.currentStatus}</td>
                  <td className="td">
                    {moment(project.deadline).format("MM/DD/YYYY")}
                  </td>
                  <td className="td">{project.priority}</td>
                  <td className="td">
                    <button
                      className="button is-warning is-small"
                      type="button"
                      onClick={() => this.handleEditButton(project.project_id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="td">
                    <button
                      className="button is-danger is-small"
                      type="button"
                      onClick={() => this.handleOnClick(project.project_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {this.state.showDeletePrompt ? (
            <div className="modal is-active">
              <div className="modal-background" />
              <div className="modal-content">
                <div className="container">
                  <div className="message">
                    <div className="message-header">
                      Delete the current project?
                    </div>
                    <div className="message-body level">
                      <section className="level-item">
                        <button
                          className="button is-success"
                          onClick={() =>
                            this.deleteProject(this.state.trackProjectId)
                          }
                        >
                          Yes
                        </button>
                      </section>
                      <section className="level-item">
                        <button
                          className="button is-danger"
                          onClick={this.handleOnClick}
                        >
                          Cancel
                        </button>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            false
          )}
        </div>
      </>
    );
  }
}

export default DashboardComponent;
