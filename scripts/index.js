import initialCards from './constants.js'
import Card from './Card.js'
import FormValidator from './FormValidator.js'

// Объявляем переменные
const popups = document.querySelectorAll('.popup'); // Общий попап

const openPopupEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const formEditElement = document.querySelector('.popup__edit-container'); // Находим форму в DOM
const nameInput = document.querySelector('.popup__input_type_name'); // Находим поля формы в DOM
const jobInput = document.querySelector('.popup__input_type_descrition'); // Находим поля формы в DOM
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');

const popupImage = document.querySelector('.popup_image');
const popupCardImage = document.querySelector('.popup__card-image');
const popupCardDescription = document.querySelector('.popup__card-description');

const openPopupAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');
const formAddElement = document.querySelector('.popup__add-container'); // Находим форму в DOM
const placeNameInput = document.querySelector('.popup__input_type_place-name'); // Находим поля формы в DOM
const placeLinkInput = document.querySelector('.popup__input_type_place-link'); // Находим поля формы в DOM

const selectorTemplate = '#card-template';
const cardElement = document.querySelector('.element');

const validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error',
};

// Объявляем функции

// Универсальные функции для открытия и закрытия любых попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')||evt.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
  })
})

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened'); // нашли открытый попап
    closePopup(openedPopup); //закрыли попап с помощью функции `closePopup`
  }
}

// Попап редактирования профиля
const openPopupEdit = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
}

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function handleEditFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы, так мы можем определить свою логику отправки.
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}


// Открытие попапа с картинкой
function openPopupImage(cardData) {
  openPopup(popupImage);
  popupCardImage.src = cardData.link;
  popupCardImage.alt = cardData.name;
  popupCardDescription.textContent = cardData.name;
}

function createCard(name, link) {
 const newCardData = {
    name,
    link,
  };
 const card = new Card(newCardData, selectorTemplate, openPopupImage);
 return card;
}

function addNewCard(container, card) {
  container.prepend(card);
}

initialCards.forEach(element => {

  const card = createCard(element.name, element.link)
  addNewCard(cardElement, card.createCard());
});

// Попап добавления карточек
const openPopupAdd = () => {
  openPopup(popupAdd);
}

const formValidatorAdd = new FormValidator(validationConfig, formAddElement);
const formValidatorEdit = new FormValidator(validationConfig, formEditElement);

formValidatorAdd.enableValidation();
formValidatorEdit.enableValidation();

const handleAddFormSubmit = (evt) => {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы, так мы можем определить свою логику отправки.

  const name = placeNameInput.value;
  const link = placeLinkInput.value;

  formValidatorAdd.disableButton();

  const card = createCard(name, link)
  addNewCard(cardElement, card.createCard());
  closePopup(popupAdd);
  evt.target.reset();
}

// Обработчики
openPopupEditButton.addEventListener('click', openPopupEdit);
formEditElement.addEventListener('submit', handleEditFormSubmit); // Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»

openPopupAddButton.addEventListener('click', openPopupAdd);
formAddElement.addEventListener('submit', handleAddFormSubmit); // Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»