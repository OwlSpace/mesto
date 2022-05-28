const userNameInput = document.querySelector('.info-user__name');
const userJobInput = document.querySelector('.info-user__job');
const templateElement = document.querySelector('.template-element').content;
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

const cardOpenPopup = document.querySelector('.popup-open-card');
const cardClosePopupButton = cardOpenPopup.querySelector('.popup__close-button');


profileEditPopupOpenButton.addEventListener('click', () => {
    profileEditPopupNameInput.value = userNameInput.textContent;
    profileEditPopupJobInput.value = userJobInput.textContent;
    open(profileEditPopup);
});

profileEditPopupCloseButton.addEventListener('click', () => {
    close(profileEditPopup);
});

profileEditPopupForm.addEventListener('submit', updateUserInfo);

cardAddPopupOpenButton.addEventListener('click', () => {
    cardAddPopupForm.reset();
    cardAddPopupSaveButton.disabled = true;
    open(cardAddPopup);
});
cardAddPopupCloseButton.addEventListener('click', () => close(cardAddPopup));
cardAddPopupForm.addEventListener('submit', appendCardIntoTemplate);

cardClosePopupButton.addEventListener('click', () => close(cardOpenPopup))


initialCards.forEach((item) => {
    cardsContainer.append(buildCard(item));
});

function buildCard(item) {

    const newCard = templateElement.cloneNode(true);
    const newCardElementImage = newCard.querySelector('.element__image');
    const viewingImage = cardOpenPopup.querySelector('.open-card-viewing__image');
    const viewingSubtitle = cardOpenPopup.querySelector('.open-card-viewing__subtitle');

    newCardElementImage.src = item.link;
    newCardElementImage.alt = item.name;
    newCard.querySelector('.element__title').textContent = item.name;

    newCard.querySelector('.element__delete-button').addEventListener('click', (event) => {
        event.target.closest('.element').remove();
    });

    newCard.querySelector('.element__like-button')
        .addEventListener('click', (event) => event.target.classList.toggle('element__like-button_active'));

    newCardElementImage.addEventListener('click', (evt) => {
        viewingImage.src = evt.target.currentSrc;
        viewingImage.alt = evt.target.alt;
        viewingSubtitle.textContent = evt.target.alt;
        open(cardOpenPopup);
    });

    return newCard;
}

function open(popup) {

    document.addEventListener('keyup', trackTheClickEsc);
    popup.addEventListener('mousedown', trackTheClickOverlay);
    popup.classList.add('popup_opened');
    document.body.style.overflow = 'hidden';

}

function close(popup) {

    document.removeEventListener('keyup', trackTheClickEsc);
    popup.removeEventListener('mousedown', trackTheClickOverlay);
    popup.classList.remove('popup_opened');
    document.body.style.overflow = '';

}

function updateUserInfo() {

    userNameInput.textContent = profileEditPopupNameInput.value;
    userJobInput.textContent = profileEditPopupJobInput.value;
    close(profileEditPopup);

}

function appendCardIntoTemplate() {

    cardsContainer.prepend(buildCard(
        {
            name: cardAddPopupNameInput.value,
            link: cardAddPopupLinkInput.value
        }
    ));
    close(cardAddPopup);

}

function trackTheClickOverlay(event) {

    if (event.target === event.currentTarget) {
        close(event.target);
    }

}

function trackTheClickEsc(event) {

    if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        close(openedPopup);
    }

}