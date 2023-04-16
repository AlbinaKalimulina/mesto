const openPopupButton = document.querySelector('.profile__edit-button_popup-open');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__container'); // Находим форму в DOM
let nameInput = document.querySelector('.popup__input_name'); // Находим поля формы в DOM
let jobInput = document.querySelector('.popup__input_description'); // Находим поля формы в DOM
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__description');

function openPopup() {
  popup.classList.add('popup_opened');
  
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup(evt) {
  const isOverlay = evt.target.classList.contains('popup');
  const isCloseButton = evt.target.classList.contains('popup__close-button');

  if (isOverlay || isCloseButton) 
  {
    popup.classList.remove('popup_opened');
  }
}

openPopupButton.addEventListener('click', openPopup);
popup.addEventListener('click', closePopup);


// // Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    popup.classList.remove('popup_opened');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);