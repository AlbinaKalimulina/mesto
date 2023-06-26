export default class Popup {
    constructor(selectorPopup) {
        this._popup = document.querySelector(selectorPopup);
        this._popupCloseButton = this._popup.querySelector('.popup__close-button');
        this._form = this._popup.querySelector('.popup__container');
    }
    
    _handleOverlayClose= (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        }
    }

    _handleCloseButton = () => {
        this.close();
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._popupCloseButton.addEventListener('click', this._handleCloseButton);
        this._popup.addEventListener('click', this._handleOverlayClose);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
}