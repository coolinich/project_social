class UserService {
    /**
     * getInfo - function for retrieving all data about user
     * @returns {Promise} which can be resolved with data from server response (object with user's data) or error
    */
    getInfo() {
        return new Promise((resolve, reject) => {
            const id = localStorage.getItem("social_user_id");

            fetch(`${env.apiUrl}/public/users/get-info/${id}`)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }

    /**
     * uploadCover - function for changing cover Image for user
     * @param {File Object} file which should be uploaded to server
     * @returns {Promise} which can be resolved with data from server response or error
    */
    uploadCover(file) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("coverImg", file);

            // Get token
            const token = localStorage.getItem("social_user_token");
            // Get user id
            const id = localStorage.getItem("social_user_id");

            if (!token || !id) return reject("Error. Unauthorized.");

            fetch(`${env.apiUrl}/public/users/upload-cover/${id}`, {
                method: "POST",
                body: formData,
                headers: {
                    "x-access-token": token
                }
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }

    /**
     * uploadImages - function for uploading images for user
     * @param {Array} files Array of files which should be uploaded to server
     * @returns {Promise} which can be resolved with data from server response or error
    */
    uploadImages(files) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            files.forEach((photo, i) => {
                formData.append("userPhotos", photo);
            });
            
            // // Get token
            const token = localStorage.getItem("social_user_token");
            // Get user id
            const id = localStorage.getItem("social_user_id");

            if (!token || !id) return reject("Error. Unauthorized.");

            fetch(`${env.apiUrl}/public/users/upload-photos/${id}`, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json, text/plain, */*",
                    "x-access-token": token      
                }
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });        
    }
}