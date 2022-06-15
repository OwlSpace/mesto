import {initialCards, selectorList, cardOpenPopup} from './constants/constants.js';
import FormValidate from "./validate/validate.js";
import Card from "./card/card.js";
import {open, close} from "./utils/elementsInteractionUtils.js";


const forms = {};
const userNameInput = document.querySelector('.info-user__name');
const userJobInput = document.querySelector('.info-user__job');
const cardsContainer = document.querySelector('.elements__list');

const profileEditPopup = document.querySelector('.popup-profile');
const profileEditPopupForm = profileEditPopup.querySelector('.popup__form');
const profileEditPopupOpenButton = document.querySelector('.info-user__edit-button');
const profileEditPopupCloseButton = profileEditPopup.querySelector('.popup__close-button');
const profileEditPopupNameInput = profileEditPopup.querySelector('.popup__field_input-name');
const profileEditPopupJobInput = profileEditPopup.querySelector('.popup__field_input-job')

const cardAddPopup = document.querySelector('.popup-card');
const cardAddPopupForm = cardAddPopup.querySelector('.popup__form');
const cardAddPopupOpenButton = document.querySelector('.profile__add-button');
const cardAddPopupSaveButton = cardAddPopup.querySelector('.popup__disabled');
const cardAddPopupCloseButton = cardAddPopup.querySelector('.popup__close-button');
const cardAddPopupNameInput = cardAddPopup.querySelector('.popup__field_input-name');
const cardAddPopupLinkInput = cardAddPopup.querySelector('.popup__field_input-link');

const cardClosePopupButton = cardOpenPopup.querySelector('.popup__close-button');


profileEditPopupOpenButton.addEventListener('click', () => openProfilePopupWithDefaultValues(profileEditPopup));

profileEditPopupCloseButton.addEventListener('click', () => {
    close(profileEditPopup);
});

profileEditPopupForm.addEventListener('submit', () => updateUserInfo(event));

cardAddPopupOpenButton.addEventListener('click', () => {
    cardAddPopupForm.reset();
    forms[cardAddPopupForm.name].disableButton(cardAddPopupSaveButton);
    open(cardAddPopup);
});
cardAddPopupCloseButton.addEventListener('click', () => close(cardAddPopup));
cardAddPopupForm.addEventListener('submit', () => appendCardIntoTemplate(event));

cardClosePopupButton.addEventListener('click', () => close(cardOpenPopup))


initialCards.forEach((item) => {

    cardsContainer.append(buildNewCard(item));

});

function buildNewCard(item) {

    const card = new Card(item, '.template-element');
    return card.generate();

}


function updateUserInfo(event) {

    event.preventDefault();

    userNameInput.textContent = profileEditPopupNameInput.value;
    userJobInput.textContent = profileEditPopupJobInput.value;
    close(profileEditPopup);

}

function appendCardIntoTemplate(event) {

    event.preventDefault();

    cardsContainer.prepend(buildNewCard({
        name: cardAddPopupNameInput.value,
        link: cardAddPopupLinkInput.value
    }));
    close(cardAddPopup);

}

function openProfilePopupWithDefaultValues(profileEditPopup){
    profileEditPopupNameInput.value = userNameInput.textContent;
    profileEditPopupJobInput.value = userJobInput.textContent;
    open(profileEditPopup);
}

Array.from(document.forms).forEach((formElement) => {
    forms[formElement.name] = new FormValidate(selectorList, formElement);
    forms[formElement.name].enableValidation();
});
