class AuthenicationService {
    successfulLogin(username, password) {
        console.log("Login is successful.");
        sessionStorage.setItem('authenticatedUser', username);
    }
    
    isLoggedIn() {
        if(sessionStorage.getItem("authenticatedUser")=== null) {
            return false
        }
        return true;
    }
    
    getUsername() {
        return sessionStorage.getItem("authenticatedUser");
    }
    
    logoutUser() {
        console.log("Logout is successful.");
        sessionStorage.removeItem("authenticatedUser");
    }
}

export default new AuthenicationService();