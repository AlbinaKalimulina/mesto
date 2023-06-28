import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(selectorPopup, submitFunction) {
        super(selectorPopup);
        this._submitFunction = submitFunction;
        this._form = this._popup.querySelector('.popup__container');
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._saveButton = this._form.querySelector('.popup__save-button');
        this._defaultSaveButtonText = this._saveButton.textContent;
    }

    setInputValues(dataUser) {
        this._inputList.forEach(input => {
            input.value = dataUser[input.name];
        })
    }

    _getInputValues() {
        this._values = {};
        this._inputList.forEach(input => {
            this._values[input.name] = input.value;
        });
        return this._values;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._saveButton.textContent = `Сохранение...`;
            this._submitFunction(this._getInputValues());
        })
    }

    setDefaultText() {
        this._saveButton.textContent = this._defaultSaveButtonText;
    }

    close() {
        super.close();
        this._form.reset();
    }
}