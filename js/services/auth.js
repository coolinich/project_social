class AuthService {
    /**
     * login - function for login user
     * @param {String} email email of existing user;
     * @param {String} password corresponding password
     * @returns {Promise} which can be resolved with data from server response or error  
     */
    login(email, password) {
        return new Promise((resolve, reject) => {
            fetch(`${env.apiUrl}/public/auth/login`, {
                method: "POST",
                body: JSON.stringify({email, password}),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }

    /**
     * resetPsw - function for password reseting 
     * @param {String} email email of existing user;
     * @returns {Promise} which can be resolved with data from server response or error  
     */
    resetPsw(email) {
        return new Promise((resolve, reject) => {
            fetch(`${env.apiUrl}/public/auth/reset-password`, {
                method: "POST",
                body: JSON.stringify({email}),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }
}