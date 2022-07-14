import './index.css';
import {
    initialCards,
    selectorList,
    configurationForm,
    configurationPopup,
    newPlaceFormName,
    profileFormName,
    profileConfigurationSelectors,
    viewPopupConfiguration,
    forms,
    profileEditPopupOpenButton,
    cardAddPopupOpenButton,
    templateSelector,
    profilePopupSelector,
    imagePopupSelector,
    newPlacePopupSelector,
    cardsContainerSelector
} from '../scripts/constants/constants.js';
import FormValidate from "../scripts/components/FormValidate.js";
import Card from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";




const cardPopup = new PopupWithImage(imagePopupSelector, configurationPopup, viewPopupConfiguration);
cardPopup.setEventListeners();


function buildNewCard(item) {

    const card = new Card(item, templateSelector, cardPopup.openPopup);
    return card.generate();

}


const newCardsContainer = new Section({
    items: initialCards.reverse(),
    renderer: buildNewCard
}, cardsContainerSelector);
newCardsContainer.rendererAll();


const handleCardSubmit = (data) => {
    newCardsContainer.addItem(data);

}


const newPlacePopup = new PopupWithForm(
    newPlacePopupSelector,
    newPlaceFormName,
    configurationPopup,
    configurationForm,
    handleCardSubmit
);
newPlacePopup.setEventListeners();

const user = new UserInfo(profileConfigurationSelectors);


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
    profilePopupSelector,
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
