import axios from "axios";
import { API_URI } from "../../VariableProperties.js";

class UserDataService {
  retrieveUsers() {
    return axios.get(`${API_URI}/users`);
  }
}

export default new UserDataService();
