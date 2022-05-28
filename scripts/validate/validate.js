const selectorList = {
    formsPopup: '.popup__form',
    inputsPopup: '.popup__field',
    popupSaveButton: '.popup__save-button',
    errorClass: 'popup__error-user'
};

function enableValidation(settings) {

    const {formsPopup} = settings;
    const formList = Array.from(document.querySelectorAll(formsPopup));

    formList.forEach((popup) => {
        popup.addEventListener('submit', (event) => {
            event.preventDefault();
        })
        getInputList(popup, settings)
    })

}

function getInputList(popup, settings) {

    const {inputsPopup, popupSaveButton} = settings;

    const inputList = Array.from(popup.querySelectorAll(inputsPopup));
    const saveButton = popup.querySelector(popupSaveButton);

    inputList.forEach((element) => {
        element.addEventListener('input', () =>  {
            isValid(element, popup, settings);
            toggleButtonState(inputList, saveButton);
        });
    })

}

function toggleButtonState(inputList, button) {

    button.disabled = !!hasInvalidInput(inputList);

}

function isValid(element, popup, settings) {

    if (!element.validity.valid) {
        showInputError(element, popup, element.validationMessage, settings);
    } else {
        hideInputError(element, popup, settings);
    }

}

function showInputError(element, popup, errorMessage, settings) {

    const {errorClass} = settings;
    const formError = popup.querySelector(`.${element.id}-error`);

    element.classList.add(errorClass);
    formError.textContent = errorMessage;

}

function hideInputError(element, popup, settings) {

    const {errorClass} = settings;

    element.classList.remove(errorClass);
    const formError = popup.querySelector(`.${element.id}-error`);
    formError.textContent = '';

}

function hasInvalidInput(inputList) {

    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })

}

enableValidation(selectorList);