import {
    initialCards,
    selectorList,
    cardOpenPopup,
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
    viewPopupConfiguration
} from './constants/constants.js';
import FormValidate from "./validate/validate.js";
import Card from "./card/card.js";
import Section from "./section/section.js";
import PopupWithForm from "./popupWithForm/popupWithForm.js";
import PopupWithImage from "./popupWithImage/popupWithImage.js";
import UserInfo from "./userInfo/userInfo.js";


const forms = {};
const userNameInput = document.querySelector('.info-user__name');
const userJobInput = document.querySelector('.info-user__job');
// const cardsContainer = document.querySelector('.elements__list');

const profileEditPopup = document.querySelector('.popup-profile');
const profileEditPopupForm = profileEditPopup.querySelector('.popup__form');
const profileEditPopupOpenButton = document.querySelector('.info-user__edit-button');
const profileEditPopupCloseButton = profileEditPopup.querySelector('.popup__close-button');
const profileEditPopupNameInput = profileEditPopup.querySelector('.popup__field_input-name');
const profileEditPopupJobInput = profileEditPopup.querySelector('.popup__field_input-job')

const cardAddPopup = document.querySelector('.popup-card');
const cardAddPopupForm = cardAddPopup.querySelector('.popup__form');
const cardAddPopupOpenButton = document.querySelector('.profile__add-button');
const cardAddPopupCloseButton = cardAddPopup.querySelector('.popup__close-button');
const cardAddPopupNameInput = cardAddPopup.querySelector('.popup__field_input-name');
const cardAddPopupLinkInput = cardAddPopup.querySelector('.popup__field_input-link');

const cardClosePopupButton = cardOpenPopup.querySelector('.popup__close-button');


//
//
// profileEditPopupCloseButton.addEventListener('click', () => {
//     close(profileEditPopup);
// });

// profileEditPopupForm.addEventListener('submit', appendCardIntoTemplate);

// cardAddPopupOpenButton.addEventListener('click', () => {
//     cardAddPopupForm.reset();
//     forms[cardAddPopupForm.name].disableButton();
//     open(cardAddPopup);
// });


// cardAddPopupCloseButton.addEventListener('click', () => close(cardAddPopup));
//
// cardClosePopupButton.addEventListener('click', () => close(cardOpenPopup))


// initialCards.forEach((item) => {
//
//     cardsContainer.append(buildNewCard(item));
//
// });

const viewPopup = new PopupWithImage(imegePopupSelector, configurationPopup, viewPopupConfiguration);


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

const newPlacePopup = new PopupWithForm(newPlacePopupSelector, newPlaceFormName, configurationPopup, configurationForm, handleCardSubmit);
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

const profilePopup = new PopupWithForm(profilePopupSelector, profileFormName, configurationPopup, configurationForm, updateUserInfo, user.getUserInfo);
profilePopup.setEventListeners();

const handleProfilePopup = () => {
    console.log('click')
    profilePopup.openPopup();
}


// function appendCardIntoTemplate(event) {
//
//     event.preventDefault();
//
//     cardsContainer.prepend(buildNewCard({
//         name: cardAddPopupNameInput.value,
//         link: cardAddPopupLinkInput.value
//     }));
//     close(cardAddPopup);

// }


profileEditPopupOpenButton.addEventListener('click', handleProfilePopup);


// cardAddPopupForm.addEventListener('submit', handleCardSubmit);

cardAddPopupOpenButton.addEventListener('click', appendCardIntoTemplate);
