export default class UserInfo {
    constructor(configInfo) {
        this._profileName = document.querySelector(configInfo.profileNameSelector);
        this._profileJob = document.querySelector(configInfo.profileJobSelector);
        this._profileAvatar = document.querySelector(configInfo.profileAvatar);
    }

    setUserInfo({ username, description, userphoto }) {
        this._profileName.textContent = username;
        this._profileJob.textContent = description;
        this._profileAvatar.src = userphoto;
    }

    getUserInfo() {
        return { username: this._profileName.textContent, description: this._profileJob.textContent };
    }
}