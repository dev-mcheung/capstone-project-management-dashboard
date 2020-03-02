import React, { Component } from "react";
import AuthenicationService from "./AuthenicationService.js";
import {Formik, ErrorMessage, Form, Field} from 'formik';
import { Redirect } from "react-router-dom";
// import {Route} from 'react-router-dom';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            loginFailed: false,
            loginSuccess: false,
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeNotification = this.closeNotification.bind(this);
    }

    componentDidMount() {
        if (AuthenicationService.isLoggedIn() === true) {
            this.setState({redirect: true});
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    handleSubmit(values) {
        AuthenicationService.executeJwtAuthenticationService(values)
            .then((response) => {
                AuthenicationService.registerSuccessfulLoginForJwt(values.username);
                this.setState({loginSuccess: true});
                this.setState({loginFailed:false});
                this.props.history.push(`/users/${values.username}/dashboard`);
            })
            .catch ( () => {
                this.setState({loginFailed:true});
                this.setState({loginSuccess: false});
            })
    }
    
    closeNotification(event) {
        this.setState({loginFailed: false});
    }

    render() {
        let {username, password} = this.state;
        return (
            this.state.redirect
            ? <Redirect to={`/users/${AuthenicationService.getUsername()}/dashboard`}/>
            :
            <Formik
                initialValues={{username, password}}
                validateOnBlur={true}
                validateOnChange={true}
                onSubmit={this.handleSubmit} 
                onChange={this.handleChange}
            >
                {(props) => (
                    <section className="hero is-dark is-fullheight">
                        <div className="hero-body">
                            <div className="container">
                                <div className="column is-centered">
                                    <div className="column is-4 is-offset-4">
                                        <Form className="box">
                                            <fieldset className="field">
                                                <label className="label has-text-weight-semibold has-text-justified is-size-5">
                                                    Username
                                                </label>
                                                <div className="control has-icons-left">
                                                    <Field 
                                                        className="input"
                                                        type="text"
                                                        name = "username"
                                                        placeholder="e.g user@email.com"
                                                        required 
                                                    />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-envelope">
                                                    </i>
                                                </span>
                                                    <ErrorMessage name="username" component="p" className="help is-danger"/>
                                                </div>
                                            </fieldset>
                                            <fieldset className="field">
                                                <label className="label has-text-weight-semibold has-text-justified is-size-5">
                                                    Password
                                                </label>
                                                <div className="control has-icons-left">
                                                    <Field 
                                                        className="input" 
                                                        type="password"
                                                        name="password"
                                                        placeholder="*****"
                                                        required 
                                                    />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-lock"></i>
                                                </span>
                                                    <ErrorMessage name="password" component="p" className="help is-danger" />
                                                </div>
                                            </fieldset>
                                            <div className="field">
                                                <p className="control">
                                                    <button className="button is-success" type="submit">
                                                        Login
                                                    </button>
                                                </p>
                                            </div>
                                            {this.state.loginFailed && <div className="notification is-centered is-danger"><button onClick={this.closeNotification} className="delete"></button>Invalid Username or Password</div>}
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </Formik>
        )
    }
}

export default LoginComponent