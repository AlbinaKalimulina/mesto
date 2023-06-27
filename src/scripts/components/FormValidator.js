export default class FormValidator {
    constructor(validationConfig, form) {
        this._inputSelector = validationConfig.inputSelector;
        this._submitButtonSelector = validationConfig.submitButtonSelector;
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._errorClass = validationConfig.errorClass;
        this._textErrorClass = validationConfig.textErrorClass;
        this._form = form;
    }

    resetErrorInput() {
        this._formInputs.forEach((input) => {
            const errorTextElement = this._form.querySelector(`#${input.id}-error`)
            if (!input.validity.valid) {
                this._hideInputError(errorTextElement, input)
            }
        })
        this.disableButton();
    }


    _hideInputError(errorTextElement, input) {
        input.classList.remove(this._inputErrorClass);
        errorTextElement.textContent = '';
        errorTextElement.classList.remove(this._textErrorClass)
    }


    enableValidation = () => {
        this._formButton = this._form.querySelector(this._submitButtonSelector);
        this._formInputs = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._setEventListeners();
    };


    // Накладываем слушатели для запуска валидации
    _setEventListeners = () => {
        this.disableButton(this._formButton);

        this._formInputs.forEach(input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                if (this._hasInvalidInput(this._formInputs)) {
                    this.disableButton(this._formButton);
                } else {
                    this._enableButton(this._formButton);
                }
            })
        })
    };

    _checkInputValidity = (input) => {
        const currentInputErrorContainer = document.querySelector(`#${input.id}-error`) // находим контейнер для ошибки для конкретного инпута, #${input.id} - шаблон текущего инпута + суффикс '-error'

        if (input.checkValidity()) { // true/false
            input.classList.remove(this._inputErrorClass);
            currentInputErrorContainer.textContent = '';

        } else {
            input.classList.add(this._inputErrorClass);
            currentInputErrorContainer.textContent = input.validationMessage;
        }
    }
    // Сделай кнопку доступной
    _enableButton = () => {
        this._formButton.classList.remove(this._inactiveButtonClass);
        this._formButton.removeAttribute('disabled', true);
    }

    // Сделай кнопку недоступной
    disableButton = () => {
        this._formButton.classList.add(this._inactiveButtonClass);
        this._formButton.setAttribute('disabled', true);
    }

    _hasInvalidInput = () => {
        return this._formInputs.some(item => !item.validity.valid); // true/false
    }
}