let popupForm = document.querySelector('.popup__form');
let popup = document.querySelector('.popup');
let infoUserEdit = document.querySelector('.info-user__edit-button');
let popupClose = document.querySelector('.popup__close-button');
let popupNameValue = document.querySelector('.popup__field_input-name');
let popupJobValue = document.querySelector('.popup__field_input-job')
let popupName = document.querySelector('.info-user__name');
let popupJod = document.querySelector('.info-user__job');


infoUserEdit.addEventListener('click', open);
popupClose.addEventListener('click', close);
popupForm.addEventListener('submit', formSubmitHandler);

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