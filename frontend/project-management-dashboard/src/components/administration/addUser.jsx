import React, {Component} from 'react'

class ManageUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showAddUser: false
        }
        this.renderAddUser = this.renderAddUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    renderAddUser(event) {
        this.setState({showAddUser: true});
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return(
            <section className="hero is-halfheight">
                <div className="container is-fluid">
                    <div className="columns">
                        <div className="column is-2">
                            <p className="menu-label">
                                Administration
                            </p>
                            <ul className="menu-list">
                                <li>Manage Users
                                    <ul>
                                        <li onClick={this.renderAddUser}>
                                                <a href="!#">Add users</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {this.state.showAddUser && <div className="column is-9">
                            <div className="container">
                                <form className="box">
                                    <div className="field">
                                        <label className="label has-text-weight-semibold has-text-justified is-size-5">
                                            Username
                                        </label>
                                        <input type="text" className="input" name="username" defaultValue={this.state.username} />
                                    </div>
                                    <div className="field">
                                        <label className="label has-text-weight-semibold has-text-justified is-size-5">
                                            Password
                                        </label>
                                        <input type="password" className="input" name="password" defaultValue={this.state.password} />
                                    </div>
                                    <div className="field">
                                        <label className="label has-text-weight-semibold has-text-justified is-size-5">
                                            Confirm Password
                                        </label>
                                        <input type="password" className="input" name="password" defaultValue={this.state.password} />
                                    </div>
                                    <div className="field">
                                        <p className="control">
                                            <button className="button is-success">
                                                Add User
                                            </button>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    }
                    </div>
                </div>
            </section>
        )
    }
}

export default ManageUserComponent