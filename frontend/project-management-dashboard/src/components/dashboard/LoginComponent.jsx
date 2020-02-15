import React, {Component} from "react"

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
    
    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    <input type="text" name="username" value={this.state.username} className="input is-rounded" placeholder="Username"/> 
                    <input type="password" name="password" value={this.state.password} />
                </div>
            </div>
        )
    }
}

export default LoginComponent