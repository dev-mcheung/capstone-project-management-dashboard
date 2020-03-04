import axios from "axios";
import { API_URI } from "../../VariableProperties.js";

class DashboardDataService {
  addProject(name, data) {
    return axios.post(`${API_URI}/users/${name}/dashboard/projects`, data);
  }

  retrieveAllProjects() {
    return axios.get(`${API_URI}/api/projects`);
  }

  retrieveProjectById(username, id) {
    return axios.get(`${API_URI}/users/${username}/dashboard/projects/${id}`);
  }

  deleteProject(name, id) {
    return axios.delete(`${API_URI}/users/${name}/dashboard/projects/${id}`);
  }
}

export default new DashboardDataService();
