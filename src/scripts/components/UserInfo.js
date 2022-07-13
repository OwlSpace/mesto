export default class UserInfo {
    constructor({titleContainer, jobContainer}) {
        this._titleElement = titleContainer;
        this._jobElement = jobContainer;
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