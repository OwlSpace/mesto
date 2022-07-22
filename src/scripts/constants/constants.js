import Api from "../components/Api";
import UserInfo from "../components/UserInfo";



export const api = new Api({
    serverUrl: 'https://mesto.nomoreparties.co/v1/cohort-45',
    token: 'c8c62f37-61bd-465e-9fee-a35009eb7d26',
});

export const selectorList = {
    inputsPopup: '.popup__field',
    popupSaveButton: '.popup__save-button',
    errorClass: 'popup__error-user'
};


export const profileConfigurationSelectors = {
    titleSelector: '.info-user__name',
    jobSelector: '.info-user__job',
    selectorAvatar: '.profile__avatar'

}

export const viewPopupConfiguration = {
    imageSelector: '.open-card-viewing__image',
    captionSelector: '.open-card-viewing__subtitle'
}

export const configurationForm = {
    selectorInput: '.popup__field'
}

export const configurationPopup = {
    activModifier: 'popup_opened',
    closeButtonSelector: '.popup__close-button'
}

export const buttonCaption = {
    normalCaption: 'Сохранить',
    activeCaption: 'Сохранение...'
}

export const confirmDeleteButtonCaption = {
    normalCaption: 'Да',
    activeCaption: 'Удаляю...'
}

export const forms = {};

export const profileEditPopupOpenButton = document.querySelector('.info-user__edit-button');
export const cardAddPopupOpenButton = document.querySelector('.profile__add-button');
export const avatarUpdateOpenButton = document.querySelector('.profile__avatar');


export const profilePopupSelector = '.popup-profile';
export const newPlacePopupSelector = '.popup-card';
export const avatarPopupSelector = '.popup-update-avatar';
export const approvalPopupSelector = '.popup-approval';


export const newPlaceFormName = 'card-new';
export const profileFormName = 'user-info';
export const avatarFormName = 'update-avatar';
export const approvalFormName = 'approval';

export const templateSelector = '.template-element';
export const imagePopupSelector = '.popup-open-card';
export const cardsContainerSelector = '.elements__list';


export const user = new UserInfo(profileConfigurationSelectors);