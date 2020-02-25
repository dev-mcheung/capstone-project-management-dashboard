import axios from 'axios';
import {API_URI} from '../../VariableProperties.js';

class DashboardDataService {
    authenicateUser(id, usernameAuth, passwordAuth) {
        return axios.get({
            baseURL: `${API_URI}/users/${id}/basicauth`,
            auth: {
                username: usernameAuth,
                password: passwordAuth
            } 
        })
    }
}

export default new DashboardDataService();