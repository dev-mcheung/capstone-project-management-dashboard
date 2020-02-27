import axios from 'axios';
import {API_URI} from '../../VariableProperties.js';

class DashboardDataService {
    addProject(name, data) {
        return axios.post(`${API_URI}/users/${name}/dashboard/projects`, data);
    }
}

export default new DashboardDataService();