const titleContainer = document.querySelector('.info-user__name');
const jobContainer = document.querySelector('.info-user__job');
const cardsContainerSelector = 'elements__list';
const newPlacePopupSelector = 'popup-card';
const profilePopupSelector = 'popup-profile';
const imagePopupSelector = 'popup-open-card';

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


export const profileConfiguration = {
    titleContainer: titleContainer,
    jobContainer: jobContainer
}

export const viewPopupConfiguration = {
    imageSelector: 'open-card-viewing__image',
    captionSelector: 'open-card-viewing__subtitle'
}

export const configurationForm = {
    selectorInput: 'popup__field',
    buttonSelectorSubmit: 'popup__save-button',
    selectorForm: 'popup__form'
}

export const configurationPopup = {
    activModifier: 'popup_opened',
    closeButtonSelector: 'popup__close-button'
}


export const cardsContainer = document.querySelector(`.${cardsContainerSelector}`);
export const newPlacePopupContainer = document.querySelector(`.${newPlacePopupSelector}`);
export const profilPopupContainer = document.querySelector(`.${profilePopupSelector}`);
export const imagePopupContainer = document.querySelector(`.${imagePopupSelector}`)
export const newPlaceFormName = 'card-new';
export const profileFormName = 'user-info';
export const cardSelector = 'template-element';
export const cardContainer = document.querySelector(`.${cardSelector}`);
export const forms = {};
export const profileEditPopupOpenButton = document.querySelector('.info-user__edit-button');
export const cardAddPopupOpenButton = document.querySelector('.profile__add-button');
