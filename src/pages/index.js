import './index.css';
import {
    initialCards,
    selectorList,
    configurationForm,
    configurationPopup,
    cardsContainerSelector,
    newPlacePopupSelector,
    profilePopupSelector,
    imegePopupSelector,
    newPlaceFormName,
    profileFormName,
    profileConfiguration,
    cardSelector,
    viewPopupConfiguration,
    forms,
    profileEditPopupOpenButton,
    cardAddPopupOpenButton
} from '../scripts/constants/constants.js';
import FormValidate from "../scripts/components/validate.js";
import Card from "../scripts/components/card.js";
import Section from "../scripts/components/section.js";
import PopupWithForm from "../scripts/components/popupWithForm.js";
import PopupWithImage from "../scripts/components/popupWithImage.js";
import UserInfo from "../scripts/components/userInfo.js";



const viewPopup = new PopupWithImage(imegePopupSelector, configurationPopup, viewPopupConfiguration);
viewPopup.setEventListeners();


function buildNewCard(item) {

    const card = new Card(item, cardSelector, viewPopup.openPopup);
    return card.generate();

}


const cardsContainer = new Section({
    items: initialCards.reverse(),
    renderer: buildNewCard
}, cardsContainerSelector);
cardsContainer.rendererAll();


const handleCardSubmit = (data) => {
    cardsContainer.addItem(data);

}


const newPlacePopup = new PopupWithForm(
    newPlacePopupSelector,
    newPlaceFormName,
    configurationPopup,
    configurationForm,
    handleCardSubmit);
newPlacePopup.setEventListeners();


const user = new UserInfo(profileConfiguration);


const appendCardIntoTemplate = () => {
    newPlacePopup.openPopup();
}


Array.from(document.forms).forEach((formElement) => {

    forms[formElement.name] = new FormValidate(selectorList, formElement);
    forms[formElement.name].enableValidation();
    if (formElement.name === 'card-new') {
        forms[formElement.name].disableButton();
    }

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
