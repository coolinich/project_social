class ImageService {
// Question: Maybe, it's better to do it from BE response for getInfo() request, but in this case extra request is needed. Not sure if it's necessary. Or I missed smth from the lesson(s), will check.  
    /**
     * getImageInfo - function for getting info about one image from DOM
     * @param {id} id of image to get it's info
     * @returns {Object} object with details about image which are present in DOM
     */
    static getImageInfo(id) {
        return {
           image_id: id,
           image_url: document.querySelector(`div[data-img-id="${id}"] img`).getAttribute('src').match(/userPhotos-.+$/)[0],
           image_likes: +document.querySelector(`div[data-img-id="${id}"]`).querySelector('.likes-count').textContent.trim(),
           image_views: +document.querySelector(`div[data-img-id="${id}"]`).querySelector('.views-count').textContent.trim()
    }
}

    /**
     * remove - function for deleting of one earlier uploaded image from server
     * @param {String} image_id id of image which should be deleted
     * @return {Promise} which can be resolved with data from server response or error
     */
    remove(image_id) {
        return new Promise((resolve, reject) => {
            // Get token
            const token = localStorage.getItem("social_user_token");
            // Get user id
            const id = localStorage.getItem("social_user_id");
            // Get img info
            const imgDetails = ImageService.getImageInfo(image_id); 

            if (!token || !id) return reject({message: "Not Authorised, please, sign in again!", error: true});
            
            fetch(`${env.apiUrl}/public/users/remove-photo/${id}`, {
                method: "DELETE",
                body: JSON.stringify({
                    image_id: imgDetails.image_id,
                    image_url: imgDetails.image_url 
                }),
                headers: {
                    "x-access-token": token,
                    "Content-type": "application/json"
                }
                })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
            });   
    }
}