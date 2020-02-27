import axios from "axios";
import {API_URI} from '../../VariableProperties.js';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

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
        this.setupAxiosInterceptors(this.createJwtToken(token));
    }

    createJwtToken(token) {
        return 'Bearer ' + token;
    }

    jwtLogout() {
        cookies.remove("authenticatedUser", {path: '/'});
    }
    
    isLoggedIn() {
        if(cookies.get('authenticatedUser')=== undefined) {
            return false
        }
        return true;
    }
    
    getUsername() {
        return cookies.get("authenticatedUser");
    }
}

export default new AuthenicationService();