import React, {Component} from 'react';
import {Formik, ErrorMessage, Form, Field} from 'formik';
import * as Yup from 'yup';
import AuthenicationService from './AuthenicationService.js';
import DashboardDataService from '../../api/dashboard/DashboardDataService.js';

class DashboardAddProject extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
            priority: '',
            currentStatus: '',
            creationDate: `${new Date()}`,
            createdBy: `${AuthenicationService.getUsername()}`,
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
    
    onSubmit(values) {
        let username = AuthenicationService.getUsername();
        console.log(values);
        DashboardDataService.addProject(username, values) 
        this.props.history.push('/dashboard');
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
        let {title, description, priority, currentStatus, creationDate, createdBy, deadline} = this.state
        return(
            <div className="container">
                <h1 className="title is-1">Create a new project</h1>
                <Formik
                    initialValues={{title, description, priority, currentStatus, creationDate, createdBy, deadline}}
                    validateOnChange={true}
                    validateOnBlur={true}
                    validationSchema={addProjectSchema}
                    enableReinitialize={true}
                    onSubmit={this.onSubmit}
                    onChange={this.handleChange}>
                    {
                        (props) => <Form className="container">
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
                            {/* <label className="label">Team Assignment</label>
                            <div className="level">
                                <fieldset className="field level-item has-text-centered">
                                    <div>
                                        <p className="heading">Project Managers</p>
                                        <div className="select is-multiple">
                                            <Field 
                                                as="select" 
                                                name="projectManager" 
                                                multiple={true}>
                                                    {
                                                        projectManagerList.map(
                                                            (member) =>
                                                                <option value={member} key={member}>{member}</option>
                                                        )
                                                    }
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
                                                >
                                                    {
                                                        projectOwnerList.map(
                                                            (member) =>
                                                                <option value={member} key={member}>{member}</option>
                                                        )
                                                    }
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
                                                >
                                                    {
                                                        techLeadList.map(
                                                            (member) =>
                                                                <option value={member} key={member}>{member}</option>
                                                        )
                                                    }
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
                                                >
                                                    {
                                                        frontEndList.map(
                                                            (member) =>
                                                                <option value={member} key={member}>{member}</option>
                                                        )
                                                    }
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
                                                >
                                                    {
                                                        backEndList.map(
                                                            (member) =>
                                                                <option value={member} key={member}>{member}</option>
                                                        )
                                                    }
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
                                                >
                                                    {
                                                        testersList.map(
                                                            (member) =>
                                                                <option value={member} key={member}>{member}</option>
                                                        )
                                                    }
                                            </Field>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="level-item"></div>
                            </div> */}
                            <div className="level">
                                <fieldset className="field level-item">
                                    <div className="container">
                                        <label className="label">Deadline</label>
                                        <Field className="calendar" type="date" name="deadline" />
                                    </div>
                                </fieldset>
                                <fieldset className="field level-item">
                                    <div className="container">
                                        <label className="label">Status</label>
                                        <Field 
                                            className="select" 
                                            as="select" 
                                            name="currentStatus"
                                        >
                                            <option value="Planning">Planning</option>
                                            <option value="Analysis">Analysis</option>
                                            <option value="Design">Design</option>
                                            <option name="Implementation">Implementation</option>
                                            <option value="Design">Design</option>
                                            <option value="Testing/Intergration">Testing/Intergration</option>
                                            <option value="Maintenance">Maintenance</option>
                                        </Field>
                                    </div>
                                </fieldset>
                                <fieldset className="field level-item">
                                    <div className="container">
                                        <label className="label">Priority</label>
                                        <Field 
                                            className="select" 
                                            as="select" 
                                            name="priority" 
                                        >
                                            <option value="Long Term">Long Term</option>
                                            <option value="Low Priority">Low Priority</option>
                                            <option value="Medium Priority">Medium Priority</option>
                                            <option value="High Priority">High Priority</option>
                                            <option value="Urgent Priority">Urgent Priority</option>
                                        </Field>
                                    </div>
                                </fieldset>
                                <div className="level-item"></div>
                            </div>
                            <button className="button is-success" type="submit">Add</button>
                        </Form>
                    }
                </Formik>
            </div>
        )
    }
}


export default DashboardAddProject;