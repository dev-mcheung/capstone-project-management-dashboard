import React, {Component} from 'react';
import {Formik, ErrorMessage, Form, Field} from 'formik';
import * as Yup from 'yup';

class DashboardAddProject extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
            projectOwner: [''],
            projectManager: [''],
            techLead: [''],
            frontEnd: [''],
            backEnd: [''],
            testers: [''],
            priority: '',
            currentStatus: '',
            creationDate: '',
            createdBy: '',
            deadline: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: Array.from(event.target.selectedOptions, (item) => item.value)
        });
    }
    
    onSubmit(event) {
        return;
    }

    render() {
        const addProjectSchema = Yup.object().shape({
          title: Yup.string()
            .min(1, 'Title is too short')
            .max(70, 'Title is too long')
            .required('Enter in a title'),
          description: Yup.string()
            .min(5, 'Description is too short')
            .required('Enter in a description'),
        });
        return(
            <div className="container">
                <h1 className="title is-1">Create a new project</h1>
                <Formik
                    initialValues={{ 
                        title: '',
                        description: '',
                        projectOwner: [''],
                        projectManager: [''],
                        techLead: [''],
                        frontEnd: [''],
                        backEnd: [''],
                        testers: [''],
                        priority: '',
                        currentStatus: '',
                        creationDate: '',
                        createdBy: '',
                        deadline: ''
                    }}
                    validateOnChange={true}
                    validateOnBlur={true}
                    validationSchema={addProjectSchema}
                    enableReinitialize={true}
                    onSubmit={this.onSubmit}>
                    {
                        (props) => <Form className="container" onSubmit={this.onSubmit}>
                            <fieldset className="field">
                                <label className="label">Title</label>
                                <Field className="input" type="text" name="title" />
                                <ErrorMessage name="title" component="p" className="help is-danger"/>
                            </fieldset>
                            <fieldset className="field">
                                <label className="label">Description</label>
                                <Field className="textarea" as="textarea" name="description" />
                                <ErrorMessage name="description" component="p" className="help is-danger"/>
                            </fieldset>
                            <label className="label">Team Assignment</label>
                            <div className="level">
                                <fieldset className="field level-item has-text-centered">
                                    <div>
                                        <p className="heading">Project Managers</p>
                                        <div className="select is-multiple">
                                            <Field 
                                                as="select" 
                                                name="projectManager" 
                                                multiple={true} 
                                                value={this.state.projectManager}
                                                onChange={this.handleChange}>
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
                                            <Field 
                                                as="select" 
                                                name="projectOwner" 
                                                multiple={true} 
                                                value={this.state.projectOwner}
                                                onChange={this.handleChange}>
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
                                            <Field 
                                                as="select" 
                                                name="techLead" 
                                                multiple={true} 
                                                value={this.state.techLead}
                                                onChange={this.handleChange}>
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
                                            <Field 
                                                as="select" 
                                                name="frontEnd" 
                                                multiple={true} 
                                                value={this.state.frontEnd}
                                                onChange={this.handleChange}>
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
                                            <Field 
                                                as="select" 
                                                name="backEnd" 
                                                multiple={true} 
                                                value={this.state.backEnd}
                                                onChange={this.handleChange}>
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
                                            <Field as="select" 
                                                name="testers" 
                                                multiple={true} 
                                                value={this.state.testers}
                                                onChange={this.handleChange}>
                                                    <option value="test1">test1</option>
                                                    <option value="test2">test2</option>
                                            </Field>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="level-item"></div>
                            </div>
                            <fieldset className="field">
                                <label className="label">Deadline</label>
                                <Field className="calendar" type="date" name="deadline" />
                            </fieldset>
                            <button className="button is-success" type="submit">Add</button>
                        </Form>
                    }
                </Formik>
            </div>
        )
    }
}

export default DashboardAddProject;