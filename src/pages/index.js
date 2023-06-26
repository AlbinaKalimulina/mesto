import './index.css'

import Card from '../scripts/components/Card.js'
import FormValidator from '../scripts/components/FormValidator.js'
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupCardDelete from '../scripts/components/PopupCardDelete';

import {
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
} from '../scripts/utils/constants.js'

const userInfo = new UserInfo(configInfo);

const popupImage = new PopupWithImage(popupImageSelector);
popupImage.setEventListeners();

const openPopupEdit = () => {
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
}

const deleteCardPopup = new PopupCardDelete(popupDeleteCardSelector, (element) => {
  element.removeCard();
  deleteCardPopup.close();
});

deleteCardPopup.setEventListeners();

function createNewCard(element) {
  const card = new Card(element, selectorTemplate, popupImage.open, deleteCardPopup.open);
  return card.createCard();
}

const section = new Section({
  items: initialCards,
  renderer: (element) => {
    section.addItem(createNewCard(element));
  }
}, cardElementSelector);

section.renderItems();


// const popupProfile = new PopupWithForm(popupEditSelector, (evt) => {
//   evt.preventDefault();
//   userInfo.setUserInfo(popupProfile.getInputValues());
//   popupProfile.close();
// })

const popupProfile = new PopupWithForm(popupEditSelector, (data) => {
  userInfo.setUserInfo(data);
  popupProfile.close();
})

popupProfile.setEventListeners();


// const popupAdd = new PopupWithForm(popupAddSelector, (evt) => {
//   evt.preventDefault();
//   section.addItem(section.renderer(popupAdd.getInputValues()));
//   popupAdd.close();
// })

const popupAdd = new PopupWithForm(popupAddSelector, (data) => {
  section.addItem(createNewCard(data));
  popupAdd.close();
})


popupAdd.setEventListeners();

const popupEditAvatar = new PopupWithForm(popupAvatarSelector, (data) => {
  document.querySelector('.profile__avatar').src = data.userphoto;
  popupEditAvatar.close();
})


document.querySelector('.avatar__button').addEventListener('click', () => {
  formValidatorAdd.resetErrorInput()
  popupEditAvatar.open();
})

popupEditAvatar.setEventListeners();

openPopupAddButton.addEventListener('click', () => {
  formValidatorAdd.resetErrorInput();
  popupAdd.open();
},)


const formValidatorAdd = new FormValidator(validationConfig, cardForm);
const formValidatorEdit = new FormValidator(validationConfig, profileForm);
const formValidatorEditAvatar = new FormValidator(validationConfig, avatarForm);
const formValidatorDeleteCard = new FormValidator(validationConfig, deleteCardForm);

formValidatorAdd.enableValidation();
formValidatorEdit.enableValidation();
formValidatorEditAvatar.enableValidation();
formValidatorDeleteCard.enableValidation();

openPopupEditButton.addEventListener('click', openPopupEdit);

