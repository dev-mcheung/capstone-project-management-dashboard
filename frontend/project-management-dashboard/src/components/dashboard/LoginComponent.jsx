import React, { Component } from "react";
import AuthenicationService from "./AuthenicationService.js";

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            loginFailed: false,
            loginSuccess: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeNotification = this.closeNotification.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    handleSubmit(event) {
        if(this.state.username==="test" && this.state.password==="test") {
            AuthenicationService.successfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/${this.state.username}/dashboard/`);
            this.setState({loginFailed: false});
            this.setState({loginSuccess: true})
        } else {
            this.setState({loginSuccess: false})
            this.setState({loginFailed: true})
            event.preventDefault();
        }
    }
    
    closeNotification(event) {
        this.setState({loginFailed: false});
    }

    render() {
        return (
            <section className="hero is-dark is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="column is-centered">
                            <div className="column is-4 is-offset-4">
                                <form onSubmit={this.handleSubmit} className="box">
                                    <div className="field">
                                        <label className="label has-text-weight-semibold has-text-justified is-size-5">
                                            Username
                                        </label>
                                        <div className="control has-icons-left">
                                            <input className="input"
                                                type="text"
                                                name = "username"
                                                defaultValue={this.state.username} placeholder="e.g user@email.com"
                                                required
                                                onChange={this.handleChange} />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-envelope">
                                                </i>
                                            </span>
                                            {this.state.usernameIsBlank && <p className="help is-danger">Please enter a valid password.</p>}
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label has-text-weight-semibold has-text-justified is-size-5">
                                            Password
                                        </label>
                                        <div className="control has-icons-left">
                                            <input className="input" 
                                            type="password"
                                            name="password"
                                            defaultValue={this.state.password}
                                            placeholder="*****"
                                            required
                                            onChange={this.handleChange} />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-lock"></i>
                                        </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <p className="control">
                                            <button className="button is-success">
                                                Login
                                            </button>
                                        </p>
                                    </div>
                                    {this.state.loginFailed && <div className="notification is-centered is-danger"><button onClick={this.closeNotification} className="delete"></button>Invalid Username or Password</div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default LoginComponent