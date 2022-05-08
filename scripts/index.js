const popupForm = document.querySelector('.popup__form');
const popupProfile = document.querySelector('.popup-profile');
let infoUserEdit = document.querySelector('.info-user__edit-button');
const popupClose = document.querySelector('.popup__close-button');
let popupNameValue = document.querySelector('.popup__field_input-name');
let popupJobValue = document.querySelector('.popup__field_input-job')
let popupName = document.querySelector('.info-user__name');
let popupJod = document.querySelector('.info-user__job');
const templateElement = document.querySelector('.template-element').content;
const listCards = document.querySelector('.elements__list');

const popupCard = document.querySelector('.popup-card');
const popupCardOpen = document.querySelector('.profile__add-button');
const popupCardClose = popupCard.querySelector('.popup__close-button');

const initialCards = [
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


infoUserEdit.addEventListener('click', () => open(popupProfile));
popupClose.addEventListener('click', () => close(popupProfile));
popupForm.addEventListener('submit', formSubmitHandler);

popupCardOpen.addEventListener('click', () => open(popupCard));
popupCardClose.addEventListener('click', () => close(popupCard));


popupNameValue.value = popupName.textContent;
popupJobValue.value = popupJod.textContent;

initialCards.forEach((item) => {
    const newCard = templateElement.cloneNode(true);
    newCard.querySelector('.element__image').src = item.link;
    newCard.querySelector('.element__image').alt = item.name;
    newCard.querySelector('.element__title').textContent = item.name;
    listCards.append(newCard);
});


function open(popup) {
    popup.classList.add('popup_opened');
    document.body.style.overflow = "hidden";
}

function close(popup) {
    popup.classList.remove('popup_opened');
    document.body.style.overflow = "";
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    popupName.textContent = popupNameValue.value;
    popupJod.textContent = popupJobValue.value;
    close(popupProfile);
}