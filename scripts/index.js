let popupForm = document.querySelector('.popup__form');
let popup = document.querySelector('.popup');
let infoUserEdit = document.querySelector('.info-user__edit-button');
let popupClose = document.querySelector('.popup__close-button');
let popupNameValue = document.querySelector('.popup__field_input-name');
let popupJobValue = document.querySelector('.popup__field_input-job')
let popupName = document.querySelector('.info-user__name');
let popupJod = document.querySelector('.info-user__job');
const templateElement = document.querySelector('.template-element').content;
const listCards = document.querySelector('.elements__list');


infoUserEdit.addEventListener('click', open);
popupClose.addEventListener('click', close);
popupForm.addEventListener('submit', formSubmitHandler);

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

initialCards.forEach((item) => {
    const newCard = templateElement.cloneNode(true);
    newCard.querySelector('.element__image').src = item.link;
    newCard.querySelector('.element__title').textContent = item.name;
    listCards.append(newCard);
});

function open() {
    popupNameValue.value = popupName.textContent;
    popupJobValue.value = popupJod.textContent;
    popup.classList.add('popup_opened');
    document.body.style.overflow = "hidden";
}

function close() {
    popup.classList.remove('popup_opened');
    document.body.style.overflow = "";
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    popupName.textContent = popupNameValue.value;
    popupJod.textContent = popupJobValue.value;
    close();
}