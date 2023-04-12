const openPopupButton = document.querySelector('.profile__edit-button_popup-open');
const popup = document.querySelector('.popup');

function togglePopup() {
  popup.classList.toggle('popup_opened');
}

openPopupButton.addEventListener('click', togglePopup);