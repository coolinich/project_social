import { env } from "./../config/env";

export class SearchService {
    /** 
     * searchUser - function for finding list of users by full name
     * @param {String} searchKeyword search keyword, full or part of full name
     * @returns {Promise} which can be resolved with data from server response (array of mathced users) or error
    */
    searchUser(searchKeyword) {        
        return new Promise((resolve, reject) => {
            // Get token
            const token = localStorage.getItem("social_user_token");
            // Get user id
            const _id = localStorage.getItem("social_user_id");

            if (!token || !_id) return reject("403");
            fetch(`${env.apiUrl}/public/users/search-users`, {
                method: "POST",
                body: JSON.stringify({
                    search_text: searchKeyword
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