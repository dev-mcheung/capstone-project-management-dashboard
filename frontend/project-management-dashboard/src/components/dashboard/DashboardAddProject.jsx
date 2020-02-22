import React, {Component} from 'react';
import {formik, ErrorMessage} from 'formik';

class DashboardAddProject extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
            projectOwner: '',
            projectManager: '',
            techLead: '',
            frontEnd: '',
            backEnd: '',
            testers: '',
            priority: '',
            currentStatus: '',
            creationDate: '',
            createdBy: '',
            deadline: ''
        }
        this.validate = this.validate.bind(this);
    }

    validate(values) {
        const errors = {};
        if(!values.title) {
            errors.title = "Enter a Title"
        } else if(values.description.length < 2) {
            errors.title = "Enter at least 2 characters"
        } 

        if(!values.description) {
            errors.description = "Enter a description"
        } else if(values.description.length < 5) {
            errors.title = "Enter at least 5 characters"
        }
    }

    render() {
        return(
            <div className="container">
                <h1 className="title is-1">Create a new project</h1>
                <Formik
                    initialValues={{ 
                        title: '', 
                        description: '',
                        projectOwner: '',
                        projectManager: '',
                        techLead: '',
                        frontEnd: '',
                        backEnd: '',
                        testers: '',
                        priority: '',
                        currentStatus: '',
                        creationDate: '',
                        createdBy: '',
                        deadline: ''
                    }}
                    validate={this.validate}>
                </Formik>
            </div>
        )
    }
}

export default DashboardAddProject;