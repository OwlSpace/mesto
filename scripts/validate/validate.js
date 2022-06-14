class FormValidate {

    constructor(settings, form) {
        this._inputsPopup = settings.inputsPopup;
        this._popupSaveButton = settings.popupSaveButton;
        this._errorClass = settings.errorClass;
        this._form = form;
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


    _toggleButtonState(inputList, button) {

        button.disabled = this._hasInvalidInput(inputList);

    }

    enableValidation() {

        const inputList = Array.from(this._form.querySelectorAll(this._inputsPopup));
        const saveButton = this._form.querySelector(this._popupSaveButton);

        inputList.forEach((element) => {
            element.addEventListener('input', () =>  {
                this._isValid(element);
                this._toggleButtonState(inputList, saveButton);
            });
        })

    }


}

export default FormValidate;





// function enableValidation(settings) {
//
//     const {formsPopup} = settings;
//     const formList = Array.from(document.querySelectorAll(formsPopup));
//
//     formList.forEach((form) => {
//         form.addEventListener('submit', (event) => {
//             event.preventDefault();
//         })
//         getInputList(form, settings)
//     })
//
// }

// function enableValidation(form, settings) {
//
//     const {inputsPopup, popupSaveButton} = settings;
//
//     const inputList = Array.from(form.querySelectorAll(inputsPopup));
//     const saveButton = form.querySelector(popupSaveButton);
//
//     inputList.forEach((element) => {
//         element.addEventListener('input', () =>  {
//             isValid(element, form, settings);
//             toggleButtonState(inputList, saveButton);
//         });
//     })
//
// }

// function toggleButtonState(inputList, button) {
//
//     button.disabled = hasInvalidInput(inputList);
//
// }

// function isValid(element, form, settings) {
//
//     if (!element.validity.valid) {
//         showInputError(element, form, element.validationMessage, settings);
//     } else {
//         hideInputError(element, form, settings);
//     }
//
// }

// function showInputError(element, form, errorMessage, settings) {
//
//     const {errorClass} = settings;
//     const formError = form.querySelector(`.${element.id}-error`);
//
//     element.classList.add(errorClass);
//     formError.textContent = errorMessage;
//
// }
//
// function hideInputError(element, form, settings) {
//
//     const {errorClass} = settings;
//
//     element.classList.remove(errorClass);
//     const formError = form.querySelector(`.${element.id}-error`);
//     formError.textContent = '';
//
// }

// function hasInvalidInput(inputList) {
//
//     return inputList.some((inputElement) => {
//         return !inputElement.validity.valid;
//     })
//
// }

// enableValidation(selectorList);