import React, { Component } from "react";
// import { Footer } from 'react-bulma-components';

class FooterComponent extends Component {
  render() {
    return (
      <footer className="footer has-background-white">
        <div className="container has-text-centered">
          <span>
            Made by{" "}
            <a
              href="https://github.com/dev-mcheung"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dev-mcheung
            </a>{" "}
            © 2020
          </span>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
