import React, {Component} from 'react'
// import { Footer } from 'react-bulma-components';

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer has-background-grey">
                <div className="container has-text-centered">
                    <span className="has-text-grey-lighter">Made by <a 
                    href="https://github.com/dev-mcheung" 
                    target="_blank" 
                    rel="noopener noreferrer">Dev-mcheung</a> © 2020</span>
                </div>
            </footer>
        )
    }
}

export default FooterComponent 