export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const selectorList = {
    inputsPopup: '.popup__field',
    popupSaveButton: '.popup__save-button',
    errorClass: 'popup__error-user'
};

export const body = document.querySelector('.page');

export const cardOpenPopup = document.querySelector('.popup-open-card');

export const configurationForm = {
    selectorInput: 'popup__field',
    buttonSelectorSubmit: 'popup__save-button',
    selectorForm: 'popup__form'
}
export const configurationPopup = {
    activModifier: 'popup_opened',
    closeButtonSelector: 'popup__close-button'
}

export const cardsContainerSelector = 'elements__list';
export const newPlacePopupSelector = 'popup-card';
export const profilePopupSelector = 'popup-profile';
export const imegePopupSelector = 'popup-open-card';
export const newPlaceFormName = 'card-new';
export const profileFormName = 'user-info';
export const cardSelector = 'template-element';

export const profileConfiguration = {
    titleSelector: 'info-user__name',
    jobSelector: 'info-user__job'
}

export const viewPopupConfiguration = {
    imageSelector: 'open-card-viewing__image',
    captionSelector: 'open-card-viewing__subtitle'
}


