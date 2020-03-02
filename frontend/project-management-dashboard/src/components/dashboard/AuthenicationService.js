import axios from "axios";
import {API_URI} from '../../VariableProperties.js';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Authorization'] = `Bearer ${cookies.get("session_token")}`; 

class AuthenicationService {

    setupAxiosInterceptors(AuthHeader) {
        axios.interceptors.request.use(
            (config) => {
                if(this.isLoggedIn()) {
                    config.headers.authorization = AuthHeader;
                }
                return config;
            }
        )
    }

    executeJwtAuthenticationService(loginData) {
        return axios.post(`${API_URI}/login`, loginData);
    }

    registerSuccessfulLoginForJwt(username, token) {
        cookies.set('authenticatedUser', username);
    }

    jwtLogout() {
        cookies.remove("authenticatedUser", {path: '/'});
        cookies.remove("session_token", {path: '/'});
    }
    
    isLoggedIn() {
        if (cookies.get("session_token") === undefined) {
            return false;
        } else {
            return true;
        }
    }
    
    getUsername() {
        return cookies.get("authenticatedUser");
    }
}

export default new AuthenicationService();