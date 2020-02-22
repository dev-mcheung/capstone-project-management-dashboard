import React, {Component} from 'react';
import DashboardNavComponent from './DashboardNavComponent';

class DashboardComponent extends Component {
    render() {
        return(
            <>
                <DashboardNavComponent />
                <div>This is the dashboard</div>
            </>
        )
    }
}

export default DashboardComponent