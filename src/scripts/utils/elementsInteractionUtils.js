import {body} from "../constants/constants.js";

function open(popup) {

    document.addEventListener('keyup', trackTheClickEsc);
    popup.addEventListener('mousedown', trackTheClickOverlay);
    //Отключения scroll при открытии popup
    body.classList.add('page_fix-scroll');
    popup.classList.add('popup_opened');

}

function close(popup) {

    document.removeEventListener('keyup', trackTheClickEsc);
    popup.removeEventListener('mousedown', trackTheClickOverlay);
    body.classList.remove('page_fix-scroll');
    popup.classList.remove('popup_opened');

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

export {open, close};