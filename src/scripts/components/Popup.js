export default class Popup {
    constructor(popupSelector, {activModifier, closeButtonSelector}) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);
        this._activModifier = activModifier;
        this._closeButtonPopup = closeButtonSelector;
    }

    openPopup() {

        document.addEventListener('keyup', this._handleEscClose);
        this._popup.classList.add(this._activModifier);

    }

    closePopup() {

        document.removeEventListener('keyup', this._handleEscClose);
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

        this._closeButton = this._popup.querySelector(this._closeButtonPopup);
        this._popup.addEventListener('mousedown', this._handleCloseOverlayClick);
        this._closeButton.addEventListener('click', this._handleCloseButtonClick);

    }

}