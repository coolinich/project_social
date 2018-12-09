class UserUI {
    constructor() {
        this._cover = document.querySelector(".user-cover");
        this._userAvatar = document.querySelector(".user-ava");
        this._userName = document.querySelector(".user-name");
    }

    /**
     * renderUserInfo function which adds user's data to layout
     * @param {Object} user object with user's data and minimal keys avatar, cover, full_name
     */
    renderUserInfo({avatar, cover, full_name}) {
        this.setCover(cover);
        this.setAvatar(avatar);
        this.setName(full_name);
    }
    
    /**
     * @param {String} url address of file which should be added as background
     */
    setCover(url) {
        this._cover.style.background = `url("${url}") no-repeat center / cover`;
    }

    /**
     * @param {String} url address of file which should be added as user's avatar
     */
    setAvatar(url) {
        const template = `<img src="${url}" alt="">`;
        this._userAvatar.insertAdjacentHTML("afterbegin", template);
    }

    /**
     * @param {String} name string which is shown as user's name
     */
    setName(name) {
        this._userName.textContent = name;
    }
}