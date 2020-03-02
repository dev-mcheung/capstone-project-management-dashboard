import axios from "axios";
import {API_URI} from '../../VariableProperties.js';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
axios.defaults.withCredentials = true;

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
        console.log(token)
        this.setupAxiosInterceptors(this.createJwtToken(token.headers.authorization));
    }

    createJwtToken(token) {
        return token;
    }

    jwtLogout() {
        cookies.remove("authenticatedUser", {path: '/'});
    }
    
    isLoggedIn() {
        if(cookies.get('authenticatedUser')=== undefined) {
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