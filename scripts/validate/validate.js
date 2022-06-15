class FormValidate {

    constructor(settings, form) {
        this._inputsPopup = settings.inputsPopup;
        this._popupSaveButton = settings.popupSaveButton;
        this._errorClass = settings.errorClass;
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(this._inputsPopup));
        this._saveButton = this._form.querySelector(this._popupSaveButton);
    }


    _showInputError(element, errorMessage) {

        const formError = this._form.querySelector(`.${element.id}-error`);

        element.classList.add(this._errorClass);
        formError.textContent = errorMessage;

    }


    _hideInputError(element) {

        element.classList.remove(this._errorClass);
        const formError = this._form.querySelector(`.${element.id}-error`);
        formError.textContent = '';

    }


    _isValid(element) {

        if (!element.validity.valid) {
            this._showInputError(element, element.validationMessage);
        } else {
            this._hideInputError(element);
        }

    }

    _hasInvalidInput(inputList) {

        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })

    }


    _enableButton(button) {
        button.disabled = false;
    }


    disableButton(button) {
        button.disabled = true;
    }


    enableValidation() {

        this._inputList.forEach((element) => {
            element.addEventListener('input', () =>  {
                this._isValid(element);
                if (this._hasInvalidInput(this._inputList)) {
                    this.disableButton(this._saveButton);
                } else {
                    this._enableButton(this._saveButton);
                }
            });
        })

    }

}

export default FormValidate;