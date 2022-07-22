export default class Card {
    constructor({name, link, likes, _id, owner: {_id: ownerId}},
                userId,
                templateSelector,
                {
                    openPopupImageHandler,
                    handelDeleteConfirm,
                    cardLikeHandler
                }
    ) {
        this._name = name;
        this._link = link;
        this._likes = likes;
        this._id = _id;
        this._userId = userId;
        this._isOwner = userId === ownerId;
        this._templateSelector = templateSelector;
        this._openPopupImage = openPopupImageHandler;
        this._handleDeleteCard = handelDeleteConfirm;
        this._handlerCardLike = cardLikeHandler;
    }

    _getTeplateElement() {
        return document.querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
    }


    generate = () => {
        this._element = this._getTeplateElement();
        this._elementImage = this._element.querySelector('.element__image');
        this._elementTitle = this._element.querySelector('.element__title')
        this._likeButton = this._element.querySelector('.element__like-button');
        this._deleteButton = this._element.querySelector('.element__delete-button');
        this._elementLike = this._element.querySelector('.element__like-count');

        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementTitle.textContent = this._name;


        this._setEventListeners();
        this._renderLikes();

        return this._element;
    }

    _setEventListeners() {


        if (this._isOwner) {
            this._deleteButton.classList.add('element__delete-button_active');
            this._deleteButton
                .addEventListener('click', this._handlerDeleteClick);
        }

        this._likeButton
            .addEventListener('click', this._likeCard);

        this._elementImage.addEventListener('click', this._handleOpenCard);
    }

    _likeCard = () => {
        this._handlerCardLike(this._id, this._isLike(), this.setLikes);
    }

    deleteCards = () => {
        this._element.remove();
        this._element = null;
    }

    _handlerDeleteClick = () => {
        this._handleDeleteCard(this._id, this.deleteCards)
    }


    _handleOpenCard = () => {
        this._openPopupImage({name: this._name, link: this._link});
    }

    _isLike = () => {
        return this._likes.map((item) => item._id).includes(this._userId)
    }

    _renderLikes = () => {
        if (this._isLike()) {
            this._likeButton.classList.add('element__like-button_active');
        } else {
            this._likeButton.classList.remove('element__like-button_active');
        }
        this._elementLike.textContent = this._likes.length;
    }

    setLikes = (newLikes) => {
        this._likes = newLikes;
        this._renderLikes();
    }

}