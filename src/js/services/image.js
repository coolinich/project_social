import { env } from "./../config/env";

export class ImageService {
    /**
     * getInfo - function for getting info about one image
     * @param {id} id of image to get it's info
     * @return {Promise} which can be resolved with data from server response (details about one image) or error
     */
    getInfo(id) {
        return new Promise((resolve, reject) => {
            fetch(`${env.apiUrl}/public/users/image-info/${id}`)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }

    /**
     * remove - function for deleting of one earlier uploaded image from server
     * @param {String} _id id of image which should be deleted
     * @return {Promise} which can be resolved with data from server response or error
     */
    remove({_id, url}) {
        return new Promise((resolve, reject) => {
            // Get token
            const token = localStorage.getItem("social_user_token");
            // Get user id
            const id = localStorage.getItem("social_user_id");

            if (!token || !id) return reject("403");
            
            fetch(`${env.apiUrl}/public/users/remove-photo/${id}`, {
                method: "DELETE",
                body: JSON.stringify({
                    image_id: _id,
                    image_url: url.match(/users-photos\/userPhotos-.+$/)[0]
                }),
                headers: {
                    "Accept": "application/json, text/plain, */*",
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