const selectorList = {
    formsPopup: '.popup__form',
    inputsPopup: '.popup__field',
    popupSaveButton: '.popup__save-button',
    errorClass: 'popup__error-user'
};

function enableValidation(settings) {

    const {formsPopup} = settings;
    const formList = Array.from(document.querySelectorAll(formsPopup));

    formList.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        })
        getInputList(form, settings)
    })

}

function getInputList(form, settings) {

    const {inputsPopup, popupSaveButton} = settings;

    const inputList = Array.from(form.querySelectorAll(inputsPopup));
    const saveButton = form.querySelector(popupSaveButton);

    inputList.forEach((element) => {
        element.addEventListener('input', () =>  {
            isValid(element, form, settings);
            toggleButtonState(inputList, saveButton);
        });
    })

}

function toggleButtonState(inputList, button) {

    button.disabled = hasInvalidInput(inputList);

}

function isValid(element, form, settings) {

    if (!element.validity.valid) {
        showInputError(element, form, element.validationMessage, settings);
    } else {
        hideInputError(element, form, settings);
    }

}

function showInputError(element, form, errorMessage, settings) {

    const {errorClass} = settings;
    const formError = form.querySelector(`.${element.id}-error`);

    element.classList.add(errorClass);
    formError.textContent = errorMessage;

}

function hideInputError(element, form, settings) {

    const {errorClass} = settings;

    element.classList.remove(errorClass);
    const formError = form.querySelector(`.${element.id}-error`);
    formError.textContent = '';

}

function hasInvalidInput(inputList) {

    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })

}

enableValidation(selectorList);