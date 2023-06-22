export default class UserInfo {
    constructor(configInfo) {
        this._profileName = document.querySelector(configInfo.profileNameSelector);
        this._profileJob = document.querySelector(configInfo.profileJobSelector);
    }

    setUserInfo(dataUser) {
        this._profileName.textContent = dataUser.username;
        this._profileJob.textContent = dataUser.description;
    }

    getUserInfo() {
        return { username: this._profileName.textContent, description: this._profileJob.textContent };
    }
}


