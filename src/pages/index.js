import './index.css';
import {
    initialCards,
    selectorList,
    configurationForm,
    configurationPopup,
    cardsContainer,
    newPlacePopupContainer,
    profilPopupContainer,
    imagePopupContainer,
    newPlaceFormName,
    profileFormName,
    profileConfiguration,
    cardContainer,
    viewPopupConfiguration,
    forms,
    profileEditPopupOpenButton,
    cardAddPopupOpenButton
} from '../scripts/constants/constants.js';
import FormValidate from "../scripts/components/Validate.js";
import Card from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";




const cardPopup = new PopupWithImage(imagePopupContainer, configurationPopup, viewPopupConfiguration);
cardPopup.setEventListeners();


function buildNewCard(item) {

    const card = new Card(item, cardContainer, cardPopup.openPopup);
    return card.generate();

}


const newCardsContainer = new Section({
    items: initialCards.reverse(),
    renderer: buildNewCard
}, cardsContainer);
newCardsContainer.rendererAll();


const handleCardSubmit = (data) => {
    newCardsContainer.addItem(data);

}


const newPlacePopup = new PopupWithForm(
    newPlacePopupContainer,
    newPlaceFormName,
    configurationPopup,
    configurationForm,
    handleCardSubmit
);
newPlacePopup.setEventListeners();

const user = new UserInfo(profileConfiguration);


const appendCardIntoTemplate = () => {
    forms[newPlaceFormName].disableButton();
    newPlacePopup.openPopup();
}


Array.from(document.forms).forEach((formElement) => {

    forms[formElement.name] = new FormValidate(selectorList, formElement);
    forms[formElement.name].enableValidation();

});


function updateUserInfo(dataProfile) {

    user.setUserInfo(dataProfile);

}

const profilePopup = new PopupWithForm(
    profilPopupContainer,
    profileFormName,
    configurationPopup,
    configurationForm,
    updateUserInfo,
    user.getUserInfo);
profilePopup.setEventListeners();


const handleProfilePopup = () => {
    profilePopup.openPopup();
}


profileEditPopupOpenButton.addEventListener('click', handleProfilePopup);
cardAddPopupOpenButton.addEventListener('click', appendCardIntoTemplate);
