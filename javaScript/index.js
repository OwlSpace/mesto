let popupForm = document.querySelector('.popup__form');
let popup = document.querySelector('.popup');
let infoUserEdit = document.querySelector('.infoUser__edit');
let popupClose = document.querySelector('.popup__close');
let popupNameValue = document.querySelector('.popup__field_name');
let popupJobValue = document.querySelector('.popup__field_job')
let popupName = document.querySelector('.infoUser__name');
let popupJod = document.querySelector('.infoUser__job');


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