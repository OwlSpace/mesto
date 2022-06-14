import {open} from "../utils/elementsInteractionUtils.js";


export default class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;

    }

    _getTeplateElement() {
        return document.querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
    }


    generate() {
        this._element = this._getTeplateElement();
        this._elementImage = this._element.querySelector('.element__image');
        this._elementTitle = this._element.querySelector('.element__title');

        this._elementImage.src = this._link;
        this._elementTitle.textContent = this._name;

        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._likeButton = this._element.querySelector('.element__like-button');
        this._deleteButton = this._element.querySelector('.element__delete-button')


        this._likeButton
            .addEventListener('click', (event) => {
                this._likeCard(event);
            });

        this._deleteButton
            .addEventListener('click', () => {
                this._deleteCard();
            });

        this._elementImage.addEventListener('click', () => {
            this._openCard();
        });
    }

    _likeCard(event) {
        event.target.classList.toggle('element__like-button_active');
    }

    _deleteCard() {
        this._element.remove();
    }

    _openCard() {
        const cardOpenPopup = document.querySelector('.popup-open-card');
        const viewingImage = cardOpenPopup.querySelector('.open-card-viewing__image');
        const viewingSubtitle = cardOpenPopup.querySelector('.open-card-viewing__subtitle');

        viewingImage.src = this._link;
        viewingImage.alt = this._name;
        viewingSubtitle.textContent = this._name;

        open(cardOpenPopup);
    }

}