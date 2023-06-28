import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(selectorPopup) {
        super(selectorPopup);
        this._popupImage = this._popup.querySelector('.popup__card-image');
        this._imagePopupDescription = this._popup.querySelector('.popup__card-description')
    }

    open = (cardData) => {
        this._popupImage.src = cardData.link;
        this._popupImage.alt = cardData.name;
        this._imagePopupDescription.textContent = cardData.name;
        super.open();
    }
}

