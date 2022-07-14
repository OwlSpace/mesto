import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor(popupSelector, formName, configPopup, {selectorInput, buttonSelectorSubmit}, submitCallBack, getCallBack = null) {
        super(popupSelector, configPopup);
        this._formName = formName;
        this._submitCallBack = submitCallBack;
        this._selectorInput = selectorInput;
        this._buttonSelectorSubmit = buttonSelectorSubmit;
        this._getCallBack = getCallBack;
        this._formElement = document.forms[this._formName];
        this._listInput = Array.from(this._formElement.querySelectorAll(this._selectorInput));
        this._saveButton = this._formElement.querySelector(this._buttonSelectorSubmit);
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

    _handleSubmit = (event) => {

        event.preventDefault();
        this._submitCallBack(this._getInputValues());
        this.closePopup();

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

    closePopup() {

        super.closePopup();
        this._formElement.reset();

    }

}