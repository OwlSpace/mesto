import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector,
                formName,
                configPopup,
                {selectorInput},
                handleCardSubmit,
                {normalCaption, activeCaption},
                getCallBack = null) {
        super(popupSelector, configPopup);
        this._formName = formName;
        this._submitCallBack = handleCardSubmit;
        this._selectorInput = selectorInput;
        this._getCallBack = getCallBack;
        this._formElement = document.forms[this._formName];
        this._listInput = Array.from(this._formElement.querySelectorAll(this._selectorInput));
        this._saveButton = this._formElement.querySelector('.popup__save-button');
        this._normalCaption = normalCaption;
        this._activeCaption = activeCaption;
    }

    _getInputValues() {

        const values = {};
        this._listInput.forEach((inputElement) => {
            values[inputElement.id.slice(6)] = inputElement.value;
        });
        return values;

    }

    _setInputValues(values) {

        this._listInput.forEach((inputElement) => {
            inputElement.value = values[inputElement.id.slice(6)];
        })

    }

    toggleButtonCaption = (isSavind) => {
        this._saveButton.textContent = isSavind ? this._activeCaption : this._normalCaption;
    }

    _handleSubmit = (event) => {

        event.preventDefault();
        this._submitCallBack(this._getInputValues(), this.toggleButtonCaption, this.closePopup);

    }

    setEventListeners() {

        super.setEventListeners();
        this._formElement.addEventListener('submit', this._handleSubmit);

    }


    openPopup() {
        if (this._getCallBack) {
            this._setInputValues(this._getCallBack());
        } else {
            this._formElement.reset();
        }
        super.openPopup();

    }

    closePopup = () => {

        super.closePopup();
        this._formElement.reset();

    }

}