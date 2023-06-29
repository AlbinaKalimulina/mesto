import './index.css'

import Card from '../scripts/components/Card.js'
import FormValidator from '../scripts/components/FormValidator.js'
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupCardDelete from '../scripts/components/PopupCardDelete.js';
import Api from '../scripts/components/Api.js';

import {
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
  avatarForm
} from '../scripts/utils/constants.js'

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: '961112be-ea9b-423a-bd3d-e30631a423a3',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo(configInfo);

const popupImage = new PopupWithImage(popupImageSelector);
popupImage.setEventListeners();

const openPopupEdit = () => {
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
}

const deleteCardPopup = new PopupCardDelete(popupDeleteCardSelector, (element) => {
  api.deleteCard(element._cardId)
    .then(res => {
      element.removeCard(res);
      deleteCardPopup.close();
    })
    .catch((error) => {
      console.log(error)
    })
});

deleteCardPopup.setEventListeners();

function createNewCard(element) {

  const card = new Card(element, selectorTemplate, popupImage.open, deleteCardPopup.open, (isLiked, cardId) => {
    if (isLiked) {
      api.deleteLike(cardId)
        .then(res => {
          console.log(res)
          card.toogleLike(res.likes)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      api.addLike(cardId)
        .then(res => {
          console.log(res)
          card.toogleLike(res.likes)
        })
        .catch(console.error)
    }
  });
  return card.createCard();
}

const section = new Section({
  renderer: (element) => {
    section.addItem(createNewCard(element));
  }
}, cardElementSelector);

const popupProfile = new PopupWithForm(popupEditSelector, (data) => {
  api.setUserInfo(data)
    .then(res => {
      userInfo.setUserInfo({ username: res.name, description: res.about, userphoto: res.avatar });
      popupProfile.close();
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => popupProfile.setDefaultText())
})

popupProfile.setEventListeners();

const popupAdd = new PopupWithForm(popupAddSelector, (data) => {
  Promise.all([api.addCard(data)])
    .then(([dataUser, dataCard]) => {
      dataCard.myid = dataUser._id;
      section.addItem(createNewCard(dataCard));
      popupAdd.close();
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => popupAdd.setDefaultText());
})


popupAdd.setEventListeners();

const popupEditAvatar = new PopupWithForm(popupAvatarSelector, (data) => {
  api.setAvatar(data)
    .then(res => {
      userInfo.setUserInfo({ username: res.name, description: res.about, userphoto: res.avatar });
        popupEditAvatar.close();
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => popupEditAvatar.setDefaultText())
})


document.querySelector('.profile__avatar-button').addEventListener('click', () => {
  formValidatorEditAvatar.resetErrorInput();
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

formValidatorAdd.enableValidation();
formValidatorEdit.enableValidation();
formValidatorEditAvatar.enableValidation();

openPopupEditButton.addEventListener('click', openPopupEdit);

Promise.all([api.getInfo(), api.getCards()])
  .then(([dataUser, dataCard]) => {
    dataCard.forEach(element => element.myid = dataUser._id)
    userInfo.setUserInfo({ username: dataUser.name, description: dataUser.about, userphoto: dataUser.avatar });
    section.renderItems(dataCard.reverse());
  })
  .catch((error) => {
    console.log(error)
  })