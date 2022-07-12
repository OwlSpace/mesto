export default class UserInfo {
    constructor({titleSelector, jobSelector}) {
        this._titleSelector = titleSelector;
        this._jobSelector = jobSelector;
        this._titleElement = document.querySelector(`.${this._titleSelector}`);
        this._jobElement = document.querySelector(`.${this._jobSelector}`);
    }

    setUserInfo = (data) => {
        this._jobElement.textContent = data.job || '';
        this._titleElement.textContent = data.title || '';
    }

    getUserInfo = () => {
        return {
            title: this._titleElement.textContent,
            job: this._jobElement.textContent
        };
    }

}