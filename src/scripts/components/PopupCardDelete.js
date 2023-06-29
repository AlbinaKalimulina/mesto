import Popup from "./Popup.js";

export default class PopupCardDelete extends Popup {
    constructor(selectorPopup, submitFunction) {
        super(selectorPopup);
        this._submitFunction = submitFunction;
        this._form = this._popup.querySelector('.popup__container');
    }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFunction(this._element);
        })
    }

    open = (element) => {
        super.open();
        this._element = element;
    }

}