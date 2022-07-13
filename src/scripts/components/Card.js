export default class Card {
    constructor(data, cardContainer, openPopupImage) {
        this._name = data.name;
        this._link = data.link;
        this._cardContainer = cardContainer;
        this._openPopupImage = openPopupImage;
    }

    _getTeplateElement() {
        return this._cardContainer
            .content
            .querySelector('.element')
            .cloneNode(true);
    }


    generate() {
        this._element = this._getTeplateElement();
        this._elementImage = this._element.querySelector('.element__image');
        this._elementTitle = this._element.querySelector('.element__title');

        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementTitle.textContent = this._name;

        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._likeButton = this._element.querySelector('.element__like-button');
        this._deleteButton = this._element.querySelector('.element__delete-button')


        this._likeButton
            .addEventListener('click', this._likeCard);

        this._deleteButton
            .addEventListener('click', this._deleteCard);

        this._elementImage.addEventListener('click', this._handleOpenCard);
    }

    _likeCard = () => {
        this._likeButton.classList.toggle('element__like-button_active');
    }

    _deleteCard = () =>  {
        this._element.remove();
        this._element = null;
    }

    _handleOpenCard = () =>  {
        this._openPopupImage({name: this._name, link: this._link});
    }

}