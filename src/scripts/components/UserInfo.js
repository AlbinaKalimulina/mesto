export default class UserInfo {
    constructor({id = '', profileNameSelector, profileJobSelector, profileAvatar}) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileJob = document.querySelector(profileJobSelector);
        this._profileAvatar = document.querySelector(profileAvatar);
        this._user = {
            _id: id,
            name: this._profileName.textContent,
            about: this._profileJob.textContent,
            avatar: this._profileAvatar.src
        }
    }

    setUserInfo({ _id, username, description, userphoto }) {
        this._user._id = _id;
        this._profileName.textContent = username;
        this._profileJob.textContent = description;
        this._profileAvatar.src = userphoto;
    }

    getUserInfo() {
        return { username: this._profileName.textContent, description: this._profileJob.textContent };
    }
}


