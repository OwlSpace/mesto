import Popup from "./Popup.js";

export default class PopupConfirmation extends Popup {
    constructor(popupSelector,
                formName,
                configPopup,
                submitCallBack,
                {normalCaption, activeCaption}
    ) {
        super(popupSelector, configPopup);
        this._formName = formName;
        this._submitCallBack = submitCallBack;
        this._formElement = document.forms[this._formName];
        this._saveButton = this._formElement.querySelector('.popup__save-button');
        this._normalCaption = normalCaption;
        this._activeCaption = activeCaption;
    }

    toggleButtonCaption = (isSavind) => {
        this._saveButton.textContent = isSavind ? this._activeCaption : this._normalCaption;
    }

    closePopup = () => {

        super.closePopup();
        this._formElement.reset();

    }

    openPopup(cardId, deleteCardsCallback) {
        this._cardId = cardId;
        this._deleteCardsCallback = deleteCardsCallback;
        super.openPopup();
    }

    _handleSubmit = (event) => {

        event.preventDefault();
        this._submitCallBack(this._cardId, this._deleteCardsCallback, this.toggleButtonCaption, this.closePopup);

    }

    setEventListeners() {

        super.setEventListeners();
        this._formElement.addEventListener('submit', this._handleSubmit);

    }

}