export default class Card {
    constructor(cardData, selectorTemplate, openPopupImage, openDeleteCardPopup, changeLike) {
        this._cardData = cardData;
        this._name = cardData.name;
        this._link = cardData.link;
        this._cardId = cardData._id;
        this._ownerId = cardData.owner._id;
        this._likes = cardData.likes;
        this._myId = cardData.myid;
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

    _changeDeleteButtonDisplay() {
        this._myId === this._ownerId ? this._deleteButton.style.display = 'block' : this._deleteButton.style.display = 'none';
    }

    updateLikesCount(likes) {
        this._likes = likes;
        this._likeCounter.textContent = likes.length;
    }

    toogleLike() {
        this._likeButton.classList.toggle('card__like-button_active');
    }

    isLikedByMe() {
        return this._likes.find(like => like._id === this._myId)
    }

    _checkLikes() {
        this._likes.forEach(element => {
            if (element._id === this._myId) {
                this._likeButton.classList.add('card__like-button_active');
                return
            }
        })
        this._likeCounter.textContent = this._likesLength;
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
        this._likeCounter = this._cloneElement.querySelector('.card__likes-counter');
        this._placeImage.src = this._cardData.link;
        this._placeImage.alt = this._cardData.name;
        this._placeName.textContent = this._cardData.name;
        this._likeCounter.textContent = this._likes.length;
        this._changeDeleteButtonDisplay();
        this._checkLikes();
        this._setEventListeners();
        return this._cloneElement;
    }
}