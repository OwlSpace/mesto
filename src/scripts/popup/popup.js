import {body} from "../constants/constants.js";

export default class Popup {
    constructor(selecortPopup, {activModifier, closeButtonSelector}) {
        this._selectorPopup = selecortPopup;
        this._popup = document.querySelector(`.${this._selectorPopup}`);
        this._activModifier = activModifier;
        this._closeButtonPopup = closeButtonSelector;
    }

    openPopup() {

        document.addEventListener('keyup', this._handleEscClose);
        //Отключения scroll при открытии popup
        body.classList.add('page_fix-scroll');
        this._popup.classList.add(this._activModifier);

    }

    closePopup() {

        document.removeEventListener('keyup', this._handleEscClose);
        body.classList.remove('page_fix-scroll');
        this._popup.classList.remove(this._activModifier);

    }

    _handleEscClose = () => {

        if (event.key === 'Escape') {
            this.closePopup();
        }

    }

    _handleCloseButtonClick = () => {

        this.closePopup();

    }

    _handleCloseOverlayClick = (event) => {

        if (event.target === event.currentTarget) {
            this.closePopup();
        }

    }

    setEventListeners() {

        this._closeButton = this._popup.querySelector(`.${this._closeButtonPopup}`);
        this._popup.addEventListener('mousedown', this._handleCloseOverlayClick);
        this._closeButton.addEventListener('click', this._handleCloseButtonClick);

    }

}