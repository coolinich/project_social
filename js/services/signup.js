class signUpService{
    /**
     * register - function for registering of new user
     * @param {Object} newUser - object with the keys: 
     * email: "denis.m.pcspace@gmail.com",
     * password: "dmgame12345",
     * nickname: "dmgame",
     * first_name: "Denis",
     * last_name: "Mescheryakov",
     * phone: "0631234567",
     * gender_orientation: "male", // or "female"
     * city: "Kharkiv",
     * country: "Ukrane",
     * date_of_birth_day: 01,
     * date_of_birth_month: 03,
     * date_of_birth_year: 1989
     * @returns {Promise} which can be resolved with data from server response or error  
    */
    register(newUser)  {
        return new Promise((resolve, reject) => {
            fetch(`${env.apiUrl}/public/auth/signup`, {
                method: "POST",
                body: JSON.stringify(newUser),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        })
    }
}
