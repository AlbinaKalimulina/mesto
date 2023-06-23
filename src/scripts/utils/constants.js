const initialCards = [
  {
    placename: 'Архыз',
    placelink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    placename: 'Челябинская область',
    placelink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    placename: 'Иваново',
    placelink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    placename: 'Камчатка',
    placelink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    placename: 'Холмогорский район',
    placelink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    placename: 'Байкал',
    placelink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const openPopupEditButton = document.querySelector('.profile__edit-button');
const formEditElement = document.querySelector('.popup__edit-container');
const openPopupAddButton = document.querySelector('.profile__add-button');
const formAddElement = document.querySelector('.popup__add-container');

const selectorTemplate = '#card-template';
const popupEditSelector = '.popup_edit';
const popupImageSelector = '.popup_image';
const cardElementSelector = '.element';
const popupAddSelector = '.popup_add';

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

export {
  initialCards,
  openPopupEditButton,
  formEditElement,
  openPopupAddButton,
  formAddElement,
  selectorTemplate,
  popupEditSelector,
  popupImageSelector,
  cardElementSelector,
  popupAddSelector,
  validationConfig,
  configInfo
}