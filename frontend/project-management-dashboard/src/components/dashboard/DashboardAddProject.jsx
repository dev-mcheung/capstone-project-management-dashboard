import React, {Component} from 'react';
import {Formik, ErrorMessage, Form, Field} from 'formik';

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
                    {
                        (props) => <Form className="container">
                            <ErrorMessage name="title" />
                            <ErrorMessage name="description" />
                            <fieldset className="field">
                                <label className="label">Title</label>
                                <Field className="input" type="text" name="title" />
                            </fieldset>
                            <fieldset className="field">
                                <label className="label">Description</label>
                                <Field className="textarea" as="textarea" name="description" />
                            </fieldset>
                            <label className="label">Team Assignment</label>
                            <div className="level">
                                <fieldset className="field level-item has-text-centered">
                                    <div>
                                        <p className="heading">Project Managers</p>
                                        <div className="select is-multiple">
                                            <Field as="select" name="projectManager" multiple className="">
                                                <option value="test1">test1</option>
                                                <option value="test2">test2</option>
                                            </Field>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="field level-item has-text-centered">
                                    <div>
                                        <p className="heading">Project Owners</p>
                                        <div className="select is-multiple">
                                            <Field as="select" name="projectOwner" multiple className="">
                                                <option value="test1">test1</option>
                                                <option value="test2">test2</option>
                                            </Field>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="field level-item has-text-centered">
                                    <div>
                                        <p className="heading">Tech Leads</p>
                                        <div className="select is-multiple">
                                            <Field as="select" name="techLead" multiple className="">
                                                <option value="test1">test1</option>
                                                <option value="test2">test2</option>
                                            </Field>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="field level-item has-text-centered">
                                    <div>
                                        <p className="heading">Frontend Devs</p>
                                        <div className="select is-multiple">
                                            <Field as="select" name="frontEnd" multiple className="">
                                                <option value="test1">test1</option>
                                                <option value="test2">test2</option>
                                            </Field>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="field level-item has-text-centered">
                                    <div>
                                        <p className="heading">Backend Devs</p>
                                        <div className="select is-multiple">
                                            <Field as="select" name="backEnd" multiple className="">
                                                <option value="test1">test1</option>
                                                <option value="test2">test2</option>
                                            </Field>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="field level-item has-text-centered">
                                    <div>
                                        <p className="heading">Testers/QAs</p>
                                        <div className="select is-multiple">
                                            <Field as="select" name="testers" multiple>
                                                <option value="test1">test1</option>
                                                <option value="test2">test2</option>
                                            </Field>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="level-item"></div>
                            </div>
                            {/*<label className="label">Current Team</label>
                            <table className="table">
                                <thead className="thead">
                                    <tr>
                                        <th>Project Manager</th>
                                        <th>Project Owner</th>
                                        <th>Tech Lead</th>
                                        <th>Frontend Dev</th>
                                        <th>Backend Dev</th>
                                        <th>Testers/QA</th>
                                    </tr>
                                </thead>
                            </table>*/}
                        </Form>
                    }
                </Formik>
            </div>
        )
    }
}

export default DashboardAddProject;