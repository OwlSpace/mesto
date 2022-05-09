const popupProfile = document.querySelector('.popup-profile');
const popupProfileForm = popupProfile.querySelector('.popup__form');
let infoUserEdit = document.querySelector('.info-user__edit-button');
const popupClose = popupProfile.querySelector('.popup__close-button');
let popupNameValue = popupProfile.querySelector('.popup__field_input-name');
let popupJobValue = popupProfile.querySelector('.popup__field_input-job')
let popupName = document.querySelector('.info-user__name');
let popupJod = document.querySelector('.info-user__job');
const templateElement = document.querySelector('.template-element').content;
const listCards = document.querySelector('.elements__list');

const popupCard = document.querySelector('.popup-card');
const popupCardOpen = document.querySelector('.profile__add-button');
const popupCardClose = popupCard.querySelector('.popup__close-button');
const popupCardForm = popupCard.querySelector('.popup__form');
const popupCardName = popupCard.querySelector('.popup__field_input-name');
const popupCardLink = popupCard.querySelector('.popup__field_input-link');

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
popupProfileForm.addEventListener('submit', formSubmitHandler);

popupCardOpen.addEventListener('click', () => open(popupCard));
popupCardClose.addEventListener('click', () => close(popupCard));
popupCardForm.addEventListener('submit', formSubmitCard);


popupNameValue.value = popupName.textContent;
popupJobValue.value = popupJod.textContent;

    initialCards.forEach((item) => {
        listCards.append(pictor(item));


        // let childNodes = listCards.childNodes;
        // childNodes.item(0).remove();
    });

function pictor(item) {
    const newCard = templateElement.cloneNode(true);
    newCard.querySelector('.element__image').src = item.link;
    newCard.querySelector('.element__image').alt = item.name;
    newCard.querySelector('.element__title').textContent = item.name;
    return newCard;
}


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

function formSubmitCard(evt) {
    evt.preventDefault();
    initialCards.unshift({
        name: popupCardName.value,
        link: popupCardLink.value
    });
    console.log(initialCards);
    listCards.prepend(pictor(initialCards[0]));
    close(popupCard);
}
