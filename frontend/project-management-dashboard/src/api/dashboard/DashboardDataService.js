import axios from 'axios';
import {API_URI} from '../../VariableProperties.js';

axios.defaults.baseURL = `${API_URI}`;

class DashboardDataService {
    
}

export default new DashboardDataService();