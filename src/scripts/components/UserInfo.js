export default class UserInfo {
    constructor({titleSelector, jobSelector, selectorAvatar}) {
        this._titleSelector = titleSelector;
        this._jobSelector = jobSelector;
        this._titleElement = document.querySelector(this._titleSelector);
        this._jobElement = document.querySelector(this._jobSelector);
        this._avatarElement = document.querySelector(selectorAvatar);
        this.setUserInfo = this.setUserInfo.bind(this);
        this.getUserInfo = this.getUserInfo.bind(this);
    }

    setUserInfo = (data) => {
        this._job = data.about;
        this._title = data.name;
        this._avatar = data.avatar;
        this._id = data._id;
        this._jobElement.textContent = data.about || '';
        this._titleElement.textContent = data.name || '';
        this._avatarElement.src = data.avatar;

    }

    getUserInfo = () => {
        return {
            title: this._titleElement.textContent,
            job: this._jobElement.textContent
        };
    }

    getUserAvatar(){
        return {
            avatar: this._avatar
        }
    }

    getUserId() {
        return this._id;

    }

}