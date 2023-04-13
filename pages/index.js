const openPopupButton = document.querySelector('.profile__edit-button_popup-open');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup(evt) {
  const isOverlay = evt.target.classList.contains('popup');
  const isCloseButton = evt.target.classList.contains('popup__close-button');

  if (isOverlay || isCloseButton) {
    popup.classList.remove('popup_opened');
  }
}

openPopupButton.addEventListener('click', openPopup);
popup.addEventListener('click', closePopup);