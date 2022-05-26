const selectorList = {
    formsPopup: '.popup',
    inputsPopup: '.popup__field',
    popupSaveButton: '.popup__save-button',
    errorClass: 'popup__error-user'
};

function enableValidation() {

    const {formsPopup} = selectorList;
    const formList = Array.from(document.querySelectorAll(formsPopup));

    formList.forEach((popup) => {
        popup.addEventListener('submit', (event) => {
            event.preventDefault();
        })
        getInputList(popup, selectorList)
    })

}

function getInputList(popup) {

    const {inputsPopup, popupSaveButton} = selectorList;

    const inputList = Array.from(popup.querySelectorAll(inputsPopup));
    const saveButton = popup.querySelector(popupSaveButton);

    inputList.forEach((element) => {
        element.addEventListener('input', function () {
            isValid(element, popup);
            toggleButtonState(inputList, saveButton);
        });
    })

}

function toggleButtonState(inputList, button) {

    button.disabled = !!hasInvalidInput(inputList);

}

function isValid(element, popup) {

    if (!element.validity.valid) {
        showInputError(element, popup);
    } else {
        hideInputError(element, popup);
    }

}

function showInputError(element, popup) {

    const {errorClass} = selectorList;
    const formError = popup.querySelector(`.${element.id}-error`);

    element.classList.add(errorClass);

    if (element.value === '') {
        formError.textContent = 'Вы пропустили это поле';
    } else {
        formError.textContent = element.validationMessage;
    }

}

function hideInputError(element, popup) {

    const {errorClass} = selectorList;

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