import initialCards from './scripts/utils/constants.js'
import Card from './scripts/components/Card.js'
import FormValidator from './scripts/components/FormValidator.js'
import PopupWithImage from './scripts/components/PopupWithImage.js';
import Section from './scripts/components/Section.js';
import UserInfo from './scripts/components/UserInfo.js';
import PopupWithForm from './scripts/components/PopupWithForm.js';

const openPopupEditButton = document.querySelector('.profile__edit-button');
const formEditElement = document.querySelector('.popup__edit-container'); 
const openPopupAddButton = document.querySelector('.profile__add-button');
const formAddElement = document.querySelector('.popup__add-container'); 

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


// Попап редактирования профиля
const openPopupEdit = () => {
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
}

// Открытие попапа с картинкой
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

// Попап добавления карточек
openPopupAddButton.addEventListener('click', () => {
  formValidatorAdd.resetErrorInput()
  popupAdd.open()
},)

const formValidatorAdd = new FormValidator(validationConfig, formAddElement);
const formValidatorEdit = new FormValidator(validationConfig, formEditElement);

formValidatorAdd.enableValidation();
formValidatorEdit.enableValidation();

openPopupEditButton.addEventListener('click', openPopupEdit);

