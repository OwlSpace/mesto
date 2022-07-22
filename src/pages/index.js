import './index.css';
import {
    profileEditPopupOpenButton,
    cardAddPopupOpenButton,
    avatarUpdateOpenButton,
    selectorList,
    configurationForm,
    configurationPopup,
    newPlaceFormName,
    profileFormName,
    user,
    viewPopupConfiguration,
    forms,
    templateSelector,
    profilePopupSelector,
    imagePopupSelector,
    newPlacePopupSelector,
    cardsContainerSelector,
    avatarPopupSelector,
    avatarFormName,
    buttonCaption,
    approvalPopupSelector,
    approvalFormName,
    confirmDeleteButtonCaption
} from '../scripts/constants/constants.js';
import FormValidate from "../scripts/components/FormValidate.js";
import Card from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupConfirmation from "../scripts/components/PopupConfirmation.js";
import {
    deleteCardHandler,
    cardLikeHandler,
    handleCardSubmit,
    updateUserInfo,
    updateAvatarUser,
    promisAll
} from '../scripts/utils/utils.js'

promisAll();


const cardPopup = new PopupWithImage(imagePopupSelector, configurationPopup, viewPopupConfiguration);
cardPopup.setEventListeners();

const confirmationOfDeletion = new PopupConfirmation(
    approvalPopupSelector,
    approvalFormName,
    configurationPopup,
    deleteCardHandler,
    confirmDeleteButtonCaption
)
confirmationOfDeletion.setEventListeners();


function handelDeleteConfirm(cardId, deleteCardsCallback) {
    confirmationOfDeletion.openPopup(cardId, deleteCardsCallback);

}


function buildNewCard(item) {

    const card = new Card(item, user.getUserId(), templateSelector,
        {
            openPopupImageHandler: cardPopup.openPopup,
            handelDeleteConfirm,
            cardLikeHandler
        });
    return card.generate();

}


export const newCardsContainer = new Section({renderer: buildNewCard}, cardsContainerSelector);


const newPlacePopup = new PopupWithForm(
    newPlacePopupSelector,
    newPlaceFormName,
    configurationPopup,
    configurationForm,
    handleCardSubmit,
    buttonCaption
);
newPlacePopup.setEventListeners();


const appendCardIntoTemplate = () => {
    forms[newPlaceFormName].disableButton();
    newPlacePopup.openPopup();
}


Array.from(document.forms).forEach((formElement) => {

    forms[formElement.name] = new FormValidate(selectorList, formElement);
    forms[formElement.name].enableValidation();

});



const profilePopup = new PopupWithForm(
    profilePopupSelector,
    profileFormName,
    configurationPopup,
    configurationForm,
    updateUserInfo,
    buttonCaption,
    user.getUserInfo);
profilePopup.setEventListeners();

const avatar = new PopupWithForm(
    avatarPopupSelector,
    avatarFormName,
    configurationPopup,
    configurationForm,
    updateAvatarUser,
    buttonCaption
);
avatar.setEventListeners();


const handleProfilePopup = () => {
    profilePopup.openPopup();
}


const updateAvatar = () => {
    forms['update-avatar'].disableButton();
    avatar.openPopup();
}


profileEditPopupOpenButton.addEventListener('click', handleProfilePopup);
cardAddPopupOpenButton.addEventListener('click', appendCardIntoTemplate);
avatarUpdateOpenButton.addEventListener('click', updateAvatar)

