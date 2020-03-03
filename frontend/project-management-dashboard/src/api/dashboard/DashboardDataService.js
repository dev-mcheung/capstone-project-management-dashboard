import axios from 'axios';
import {API_URI} from '../../VariableProperties.js';

class DashboardDataService {
    addProject(name, data) {
        return axios.post(`${API_URI}/users/${name}/dashboard/projects`, data);
    }

    retrieveAllProjects() {
        return axios.get(`${API_URI}/api/projects`);
    }

    deleteProject(name, id) {
        return axios.delete(`${API_URI}/users/${name}/dashboard/projects/${id}`);
    }
}

export default new DashboardDataService();