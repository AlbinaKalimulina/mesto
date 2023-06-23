import './index.css'

import Card from '../scripts/components/Card.js'
import FormValidator from '../scripts/components/FormValidator.js'
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';

import {
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
} from '../scripts/utils/constants.js'

const userInfo = new UserInfo(configInfo);

const popupImage = new PopupWithImage(popupImageSelector);
popupImage.setEventListeners();

const openPopupEdit = () => {
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
}

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

openPopupAddButton.addEventListener('click', () => {
  formValidatorAdd.resetErrorInput()
  popupAdd.open()
},)

const formValidatorAdd = new FormValidator(validationConfig, formAddElement);
const formValidatorEdit = new FormValidator(validationConfig, formEditElement);

formValidatorAdd.enableValidation();
formValidatorEdit.enableValidation();

openPopupEditButton.addEventListener('click', openPopupEdit);

