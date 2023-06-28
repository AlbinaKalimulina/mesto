export default class Card {
    constructor(cardData, selectorTemplate, openPopupImage, openDeleteCardPopup, changeLike) {
        this._cardData = cardData;
        this._myId = cardData.myid;
        this._ownerId = cardData.owner._id;
        this._cardId = cardData._id;
        this._likes = cardData.likes;
        this._likesLength = cardData.likes.length;
        this._selectorTemplate = selectorTemplate;
        this._openPopupImage = openPopupImage;
        this._openDeleteCardPopup = openDeleteCardPopup;
        this._changeLike = changeLike;
    }

    _getTemplate() {
        return document.querySelector(this._selectorTemplate).content.querySelector('.card').cloneNode(true);
    }

    _handleLike = () => {
        this._changeLike(this._likeButton, this._cardId);
    }

    _handleDelete = () => {
        this._openDeleteCardPopup(this);
    }

    _handleCardClick = () => {
        this._openPopupImage(this._cardData);
    }


    _setEventListeners() {
        this._likeButton.addEventListener('click', this._handleLike);
        this._deleteButton.addEventListener('click', this._handleDelete);
        this._placeImage.addEventListener('click', this._handleCardClick);
    }

    _changeVisibleForDeleteButton() {
        this._myId === this._ownerId ? this._deleteButton.style.display = 'block' : this._deleteButton.style.display = 'none';
    }

    _checkLikes() {
        this._likes.forEach(element => {
            if (element._id === this._myId) {
                this._likeButton.classList.add('card__like-button_active');
                return
            }
        })
        this._counter.textContent = this._likesLength;
    }

    toogleLike(likes) {
        this._likeButton.classList.toggle('card__like-button_active');
        this._counter.textContent = likes.length;
    }

    removeCard() {
        this._cloneElement.remove();
    }

    createCard() {
        this._cloneElement = this._getTemplate();
        this._placeImage = this._cloneElement.querySelector('.card__image');
        this._likeButton = this._cloneElement.querySelector('.card__like-button');
        this._deleteButton = this._cloneElement.querySelector('.card__delete-button');
        this._placeName = this._cloneElement.querySelector('.card__place-name');
        this._counter = this._cloneElement.querySelector('.card__likes-counter');
        this._placeImage.src = this._cardData.link;
        this._placeImage.alt = this._cardData.name;
        this._placeName.textContent = this._cardData.name;
        this._changeVisibleForDeleteButton();
        this._checkLikes();
        this._setEventListeners();
        return this._cloneElement;
    }
}