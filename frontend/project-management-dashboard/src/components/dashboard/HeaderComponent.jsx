import React, {Component} from 'react'
import {Navbar} from 'react-bulma-components'

class HeaderComponent extends Component {
    render() {
        return(
            <header>
                <nav className="navbar footer has-background-grey">
                    <div className="navbar-brand">Project Management Panel</div>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent