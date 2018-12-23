export class AuthGuard {
    /** 
     * check - function which checks which page is opened and if authorisation is required for it.
     * @param {String} currentPage unique part of URL of current page
     * @returns {Object} window.location which should be applied according to user's permissions  
    */
    check(currentPage) {
        // Get token 
        const token = localStorage.getItem("social_user_token");
        // Get id
        const id = localStorage.getItem("social_user_id");

        if ((!token || !id) && currentPage !== 'login' && currentPage !== 'register') return window.location = './login.html';
        if (token && id && (currentPage === 'login' || currentPage === 'register'))  return window.location = './index.html';
    }
}