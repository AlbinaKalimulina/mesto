const validationConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error',
};

//Запускаем валидацию
const enableValidation = ({ formSelector, ...rest }) => {
    const forms = Array.from(document.querySelectorAll(formSelector));

    forms.forEach(form => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault(); //предотвращаем отправку формы
        })
        setEventListeners(form, rest);
    })
};

// Накладываем слушатели для запуска валидации 
const setEventListeners = (form, { inputSelector, submitButtonSelector, ...rest }) => {
    const formInputs = Array.from(form.querySelectorAll(inputSelector));
    const formButton = form.querySelector(submitButtonSelector);

    disableButton(formButton, rest);

    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            checkInputValidity(input);
            if (hasInvalidInput(formInputs)) {
                disableButton(formButton, rest);
            } else {
                enableButton(formButton, rest);
            }
        })
    })
};

// Проверка поля ввода
const checkInputValidity = (input) => {
    const currentInputErrorContainer = document.querySelector(`#${input.id}-error`) // находим контейнер для ошибки для конкретного инпута, #${input.id} - шаблон текущего инпута + суффикс '-error'

    if (input.checkValidity()) { // true/false
        input.classList.remove(validationConfig.inputErrorClass);
        currentInputErrorContainer.textContent = '';

    } else {
        input.classList.add(validationConfig.inputErrorClass);
        currentInputErrorContainer.textContent = input.validationMessage;
    }
}

// Есть ли какое-то невалидное поле в форме?
const hasInvalidInput = (formInputs) => {
    return formInputs.some(item => !item.validity.valid); // true/false
}

// Сделай кнопку доступной
const enableButton = (button, { inactiveButtonClass, ...rest }) => {
    button.classList.remove(inactiveButtonClass);
    button.removeAttribute('disabled', true);
}

// Сделай кнопку недоступной
const disableButton = (button, { inactiveButtonClass, ...rest }) => {
    button.classList.add(inactiveButtonClass);
    button.setAttribute('disabled', true);
}

enableValidation(validationConfig);
