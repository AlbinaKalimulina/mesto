export default class Card {
    constructor(cardData, selectorTemplate, openPopupImage, openDeleteCardPopup) {
        this._cardData = cardData;
        this._selectorTemplate = selectorTemplate;
        this._openPopupImage = openPopupImage;
        this._openDeleteCardPopup = openDeleteCardPopup;
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

    removeCard() {
        this._cloneElement.remove();
    }

    createCard() {
        this._cloneElement = this._getTemplate();
        this._placeImage = this._cloneElement.querySelector('.card__image');
        this._likeButton = this._cloneElement.querySelector('.card__like-button');
        this._deleteButton = this._cloneElement.querySelector('.card__delete-button');
        this._placeName = this._cloneElement.querySelector('.card__place-name');
        this._placeImage.src = this._cardData.placelink;
        this._placeImage.alt = this._cardData.placename;
        this._placeName.textContent = this._cardData.placename;
        this._setEventListeners();
        return this._cloneElement;
    }
}