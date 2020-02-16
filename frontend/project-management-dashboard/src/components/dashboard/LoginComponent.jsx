import React, { Component } from "react"

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <section className="hero is-dark is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="column is-centered">
                            <div className="column is-4 is-offset-4">
                                <form action="" className="box">
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <h1>Login</h1>
                <section className="container">
                    <input type="text" name="username" value={this.state.username} className="input is-rounded" placeholder="Username"/> 
                    <input type="password" name="password" value={this.state.password} />
                </section> */}
            </section>
        )
    }
}

export default LoginComponent