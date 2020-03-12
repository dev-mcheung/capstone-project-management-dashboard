import axios from "axios";
import { API_URI } from "../../VariableProperties.js";

class UserDataService {
  retrieveUsers() {
    return axios.get(`${API_URI}/users`);
  }

  addUser(data) {
    return axios.post(`${API_URI}/users`, data);
  }
}

export default new UserDataService();
