export default class UserInfo {
    constructor({titleSelector, jobSelector}) {
        this._titleSelector = titleSelector;
        this._jobSelector = jobSelector;
        this._titleElement = document.querySelector(`.${this._titleSelector}`);
        this._jobElement = document.querySelector(`.${this._jobSelector}`);
        // this._dataProfile = {title: '', job: ''};
    }

    // _renderProfile() {
    //
    //     this._titleElement.textContent = this._dataProfile.title;
    //     this._jobElement.textContent = this._dataProfile.job;
    //
    // }

    setUserInfo = (data) => {
        this._jobElement.textContent = data.job || '';
        this._titleElement.textContent = data.title || '';
    }

    getUserInfo = () => {
        console.dir(this._titleElement);
        console.dir(this._jobElement);
        console.dir({title: this._titleElement.textContent,
            job: this._jobElement.textContent})
        return {title: this._titleElement.textContent,
                job: this._jobElement.textContent};
    }


}