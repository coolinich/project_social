import { env } from "./../config/env";

export class CommentService {
    /**
     * @param {String} id of image
     * @param {String} text text of new comment
     * @returns {Promise} which can be resolved with data from server response or error
    */
    add(id, text) {
        return new Promise((resolve, reject) => {
            // Get token
            const token = localStorage.getItem("social_user_token");
            // Get user id
            const _id = localStorage.getItem("social_user_id");

            if (!token || !_id) return reject("403");

            fetch(`${env.apiUrl}/public/users/comment/${id}`, {
                method: "POST",
                body: JSON.stringify({
                    "comment_text": text
                }),
                headers: {
                    "x-access-token": token,
                    "Content-type": "application/json"
                }
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));            
        })
    }

    /**
     * @param {String} id id of comment
     * @param {String} imgId id of corresponding image
     * @returns {Promise} which can be resolved with data from server response or error
    */
    remove(id, imgId) {
        return new Promise((resolve, reject) => {
            // Get token
            const token = localStorage.getItem("social_user_token");
            // Get user id
            const _id = localStorage.getItem("social_user_id");

            if (!token || !_id) return reject("403");

            fetch(`${env.apiUrl}/public/users/comment/${id}`, {
                method: "DELETE",
                body: JSON.stringify({
                    image_id: imgId
                }),
                headers: {
                    "x-access-token": token,
                    "Content-type": "application/json"
                }
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));            
        })
    }

    /**
     * @param {String} id id of comment
     * @param {String} text new text of comment
     * @returns {Promise} which can be resolved with data from server response or error
    */
    edit(id, text) {
        return new Promise((resolve, reject) => {
            // Get token
            const token = localStorage.getItem("social_user_token");
            // Get user id
            const _id = localStorage.getItem("social_user_id");

            if (!token || !_id) return reject("403");

            fetch(`${env.apiUrl}/public/users/comment/${id}`, {
                method: "PUT",
                body: JSON.stringify({
                    comment_text: text
                }),
                headers: {
                    "x-access-token": token,
                    "Content-type": "application/json"
                }
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));            
        })
    }

}