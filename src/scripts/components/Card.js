export default class Card {
    constructor(cardData, selectorTemplate, openPopupImage, openDeleteCardPopup) {
        // console.log(cardData)
        this._cardData = cardData;
        // this._link = cardData.link;
        // this._name = cardData.name;
        this._myId = cardData.myid;
        this._ownerId = cardData.owner._id;
        this._likes = cardData.likes;
        this._likesLength = cardData.likes.length;
        this._selectorTemplate = selectorTemplate;
        this._openPopupImage = openPopupImage;
        this._openDeleteCardPopup = openDeleteCardPopup;
        //  console.log(this._myId) //undefined
        //  console.log(this._ownerId)
    }

    _getTemplate() {
        return document.querySelector(this._selectorTemplate).content.querySelector('.card').cloneNode(true);
    }

    _handleLike = () => {
        this._likeButton.classList.toggle('card__like-button_active');
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
            if(element._id === this._myId) {
                this._likeButton.classList.add('card__like-button_active');
                return
            }
        })
        this._counter.textContent = this._likesLength
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
        this._counter = this._cloneElement.querySelector('.likes__counter');
        this._placeImage.src = this._cardData.placelink;
        this._placeImage.alt = this._cardData.placename;
        this._placeName.textContent = this._cardData.placename;
        this._changeVisibleForDeleteButton();
        this._checkLikes();
        this._setEventListeners();
        return this._cloneElement;
    }
}