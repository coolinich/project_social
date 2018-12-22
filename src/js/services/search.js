import { env } from "./../config/env";

export class SearchService {
    searchUser(searchKeyword) {
        return new Promise((resolve, reject) => {
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