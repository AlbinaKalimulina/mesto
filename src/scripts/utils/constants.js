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
const openPopupAddButton = document.querySelector('.profile__add-button');

const profileForm = document.forms["profile"];
const cardForm = document.forms["placeCard"];
const avatarForm = document.forms["avatar"];
const deleteCardForm = document.forms["deleteCard"];

const selectorTemplate = '#card-template';
const popupEditSelector = '.popup_edit';
const popupImageSelector = '.popup_image';
const cardElementSelector = '.element';
const popupAddSelector = '.popup_add';
const popupAvatarSelector = '.popup_userphoto';
const popupDeleteCardSelector = '.popup_delete';

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
  profileForm,
  openPopupAddButton,
  cardForm, 
  selectorTemplate,
  popupEditSelector,
  popupImageSelector,
  cardElementSelector,
  popupAddSelector,
  popupAvatarSelector,
  popupDeleteCardSelector,
  validationConfig,
  configInfo,
  avatarForm, 
  deleteCardForm
}