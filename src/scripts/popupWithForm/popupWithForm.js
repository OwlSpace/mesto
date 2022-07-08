import Popup from "../popup/popup.js";
export default class PopupWithForm extends Popup {
    constructor(selecortPopup, formName, configPopup, {selectorInput, buttonSelectorSubmit, selectorForm}, submitCallBack, getCallBack = null) {
        super(selecortPopup, configPopup);
        this._formName = formName;
        this._submitCallBack = submitCallBack;
        this._selectorInput = selectorInput;
        this._buttonSelectorSubmit = buttonSelectorSubmit;
        this._getCallBack = getCallBack;
        this._selectorForm = selectorForm;
        this._formElement = document.forms[this._formName];
        this._listInput = Array.from(this._formElement.querySelectorAll(`.${this._selectorInput}`));
        this._saveButton = this._formElement.querySelector(`.${this._buttonSelectorSubmit}`);
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
            console.log(inputElement.id.slice(6));
            console.dir(values)
            inputElement.value = values[inputElement.id.slice(6)];
            console.log(inputElement.value);
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
            console.log('yes')
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