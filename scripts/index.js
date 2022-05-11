const userNameInput = document.querySelector('.info-user__name');
const userJobInput = document.querySelector('.info-user__job');
const templateElement = document.querySelector('.template-element').content;
const cardsList = document.querySelector('.elements__list');
const body = document.querySelector('.page');

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

const cardOpenPopup = document.querySelector('.popup-open-card');
const cardClosePopupButton = cardOpenPopup.querySelector('.popup__close-button');


profileEditPopupOpenButton.addEventListener('click', () => open(profileEditPopup,
    profileEditPopupNameInput.value = userNameInput.textContent,
    profileEditPopupJobInput.value = userJobInput.textContent));

profileEditPopupCloseButton.addEventListener('click', () => close(profileEditPopup,
    profileEditPopupNameInput.value = userNameInput.textContent,
    profileEditPopupJobInput.value = userJobInput.textContent));

profileEditPopupForm.addEventListener('submit', updateUserInfo);

cardAddPopupOpenButton.addEventListener('click', () => open(cardAddPopup));
cardAddPopupCloseButton.addEventListener('click', () => close(cardAddPopup));
cardAddPopupForm.addEventListener('submit', appendCardIntoTemplate);

cardClosePopupButton.addEventListener('click', () => close(cardOpenPopup))


initialCards.forEach((item) => {
    cardsList.append(buildCard(item));
});

function buildCard(item) {
    const newCard = templateElement.cloneNode(true);
    const newCardElementImage = newCard.querySelector('.element__image');
    newCardElementImage.src = item.link;
    newCardElementImage.alt = item.name;
    newCard.querySelector('.element__title').textContent = item.name;

    newCard.querySelector('.element__delete-button')
        .addEventListener('click', (event) => event.target.parentElement.remove());

    newCard.querySelector('.element__like-button')
        .addEventListener('click', (event) => event.target.classList.toggle('element__like-button_active'));

    newCardElementImage.addEventListener('click', (evt) => {
        cardOpenPopup.querySelector('.open-card-viewing__image').src = evt.target.currentSrc;
        cardOpenPopup.querySelector('.open-card-viewing__subtitle').textContent = evt.target.alt;
        open(cardOpenPopup);
    });

    return newCard;
}


function open(popup) {
    popup.classList.add('popup_opened');

    // Страка ниже нужна для отключения ВЕРТИКАЛЬНОГО скрола страницы при открытии любого из popup
    body.classList.add('popup_opened-body-overflow');
}

function close(popup) {
    popup.classList.remove('popup_opened');
    body.classList.remove('popup_opened-body-overflow');
}

function updateUserInfo(evt) {
    evt.preventDefault();
    userNameInput.textContent = profileEditPopupNameInput.value;
    userJobInput.textContent = profileEditPopupJobInput.value;
    close(profileEditPopup);
}

function appendCardIntoTemplate(evt) {
    evt.preventDefault();
    cardsList.prepend(buildCard(
        {
            name: cardAddPopupNameInput.value,
            link: cardAddPopupLinkInput.value
        }
    ));
    close(cardAddPopup);
    cardAddPopupNameInput.value = '';
    cardAddPopupLinkInput.value = '';
}