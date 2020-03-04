import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class ErrorRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/" />
    ) : (
      <section className="hero is-dark is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-4">
                <div className="box has-text-centered">Invalid Route</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ErrorRoute;
