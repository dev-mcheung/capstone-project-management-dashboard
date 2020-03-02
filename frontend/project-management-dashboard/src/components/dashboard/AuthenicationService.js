import axios from "axios";
import {API_URI, cookies} from '../../VariableProperties.js';

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

    registerSuccessfulLoginForJwt(username) {
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