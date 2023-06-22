import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(selectorPopup, submitFunction) {
        super(selectorPopup);
        this._submitFunction = submitFunction;
        this._form = this._popup.querySelector('.popup__container');
        this._inputList = this._form.querySelectorAll('.popup__input');
    }

    setInputValues(dataUser) {
        this._inputList.forEach(input => {
            input.value = dataUser[input.name];
        })
    }

    getInputValues() {
        this._values = {};
        this._inputList.forEach(input => {
            this._values[input.name] = input.value;
        });
        return this._values;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._submitFunction);
    }

    

    // ДЕЛАЕТ МЕТОД _getInputValues ПРИВАТНЫМ, КАК ТРЕБУЕТСЯ В ЗАДАНИИ
    // setEventListeners() {
    //     super.setEventListeners();
    //     this._form.addEventListener('submit', (evt) => {
    //         evt.preventDefault();
    //         this._submitFunction(this._getInputValues());
    //     });
    // }

    close() {
        super.close();
        this._form.reset();
    }
}