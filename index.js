import initialCards from './scripts/utils/constants.js'
import Card from './scripts/components/Card.js'
import FormValidator from './scripts/components/FormValidator.js'
import PopupWithImage from './scripts/components/PopupWithImage.js';
import Section from './scripts/components/Section.js';
import UserInfo from './scripts/components/UserInfo.js';
import PopupWithForm from './scripts/components/PopupWithForm.js';



// Объявляем переменные
const popups = document.querySelectorAll('.popup'); // Общий попап

const openPopupEditButton = document.querySelector('.profile__edit-button');
// const popupEdit = document.querySelector('.popup_edit');
const formEditElement = document.querySelector('.popup__edit-container'); // Находим форму в DOM
const nameInput = document.querySelector('.popup__input_type_name'); // Находим поля формы в DOM
const jobInput = document.querySelector('.popup__input_type_descrition'); // Находим поля формы в DOM
// const profileName = document.querySelector('.profile__name');
// const profileJob = document.querySelector('.profile__description');

// const popupImage = document.querySelector('.popup_image');
const popupCardImage = document.querySelector('.popup__card-image');
const popupCardDescription = document.querySelector('.popup__card-description');

const openPopupAddButton = document.querySelector('.profile__add-button');
// const popupAdd = document.querySelector('.popup_add');
const formAddElement = document.querySelector('.popup__add-container'); // Находим форму в DOM
const placeNameInput = document.querySelector('.popup__input_type_place-name'); // Находим поля формы в DOM
const placeLinkInput = document.querySelector('.popup__input_type_place-link'); // Находим поля формы в DOM

const selectorTemplate = '#card-template';
const popupEditSelector = '.popup_edit';
const popupImageSelector = '.popup_image';
const cardElementSelector = '.element';
const popupAddSelector = '.popup_add';

// const cardElement = document.querySelector('.element');

const validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error',
};

const configInfo = {
  profileNameSelector: '.profile__name',
  profileJobSelector: '.profile__description',
}

const userInfo = new UserInfo(configInfo);

const popupImage = new PopupWithImage(popupImageSelector); //создаем экземпляр класса
popupImage.setEventListeners();


// Объявляем функции

// Попап редактирования профиля
const openPopupEdit = () => {
  // nameInput.value = profileName.textContent;
  // jobInput.value = profileJob.textContent;
  // openPopup(popupEdit);
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
}

// // Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
// function handleEditFormSubmit(evt) {
//   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы, так мы можем определить свою логику отправки.
//   profileName.textContent = nameInput.value;
//   profileJob.textContent = jobInput.value;
//   closePopup(popupEdit);
// }


// // Открытие попапа с картинкой
// function openPopupImage(cardData) {
//   openPopup(popupImage);
//   popupCardImage.src = cardData.link;
//   popupCardImage.alt = cardData.name;
//   popupCardDescription.textContent = cardData.name;
// }

// function createCard(name, link) {
//   const newCardData = {
//     name,
//     link,
//   };
//   const card = new Card(newCardData, selectorTemplate, popupImage.open);
//   return card;
// }


const section = new Section({
  items: initialCards,
  renderer: (element) => {
    const card = new Card(element, selectorTemplate, popupImage.open);
    return card.createCard();
  }
}, cardElementSelector);

section.renderItems();


const popupProfile = new PopupWithForm(popupEditSelector, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupProfile.getInputValues());
  popupProfile.close();
})

popupProfile.setEventListeners();


const popupAdd = new PopupWithForm(popupAddSelector, (evt) => {
  evt.preventDefault();
  section.addItem(section.renderer(popupAdd.getInputValues()));
  popupAdd.close();
})

popupAdd.setEventListeners();

// function addNewCard(container, card) {
//   container.prepend(card);
// }

// initialCards.forEach(element => {
//   const card = createCard(element.name, element.link)
//   addNewCard(cardElement, card.createCard());
// });

// Попап добавления карточек
// const openPopupAdd = () => {
//   popupAdd.open();
// }

const formValidatorAdd = new FormValidator(validationConfig, formAddElement);
const formValidatorEdit = new FormValidator(validationConfig, formEditElement);

formValidatorAdd.enableValidation();
formValidatorEdit.enableValidation();

// formAddElement.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   const cardDataNameUrl = { name: placeNameInput.value, link: placeLinkInput.value };
//   addNewCard(cardElement, card.createCard(cardDataNameUrl));
//   formValidatorAdd.disableButton();
//   // closePopup(popupAdd);
//   evt.target.reset();
// })

// const handleAddFormSubmit = (evt) => {
//   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы, так мы можем определить свою логику отправки.

//   const name = placeNameInput.value;
//   const link = placeLinkInput.value;

//   const initialCards = {
//         name,
//         link,
//       };

//   formValidatorAdd.disableButton();

//   const card = createCard(name, link)
//   addNewCard(cardElement, card.createCard());
//   // closePopup(popupAdd);
//   evt.target.reset();
// }

// Обработчики
openPopupEditButton.addEventListener('click', openPopupEdit);

// openPopupAddButton.addEventListener('click', openPopupAdd);
// formAddElement.addEventListener('submit', handleAddFormSubmit); // Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»

openPopupAddButton.addEventListener('click', () => {
  formValidatorAdd.resetErrorInput()
  popupAdd.open()
},)