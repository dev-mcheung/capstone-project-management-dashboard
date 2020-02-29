import axios from 'axios';
import {API_URI} from '../../VariableProperties.js';

class DashboardDataService {
    addProject(name, data) {
        return axios.post(`${API_URI}/users/${name}/dashboard/projects`, data);
    }

    retrieveAllProjects() {
        return axios.get(`${API_URI}/api/get/projects`);
    }
}

export default new DashboardDataService();