// Gennadiy Barsegyan, СПАСИБО! 

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
const placeName = document.querySelector('.card__place-name');
const placeLink = document.querySelector('.card__image');

const cardTemplate = document.getElementById('card-template');
const elementGridContainer = document.querySelector('.element');


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
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-button')) {
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

// Карточки template
const createCardElement = (cardData) => {
  const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);

  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__place-name');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const cardLikeButton = cardElement.querySelector('.card__like-button');

  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  const handleDelete = () => {
    cardElement.remove();
  };

  const handleLike = (evt) => {
    cardLikeButton.classList.toggle('card__like-button_active');
  };

  cardDeleteButton.addEventListener('click', handleDelete);
  cardLikeButton.addEventListener('click', handleLike);

  // Открытие попапа с картинкой
  const openPopupImage = () => {
    openPopup(popupImage);
    popupCardImage.src = cardData.link;
    popupCardImage.alt = cardData.name;
    popupCardDescription.textContent = cardData.name;
  }

  cardImage.addEventListener('click', openPopupImage);
  return cardElement;
};

const addNewCard = (cardElement) => {
  elementGridContainer.prepend(cardElement);
}

initialCards.forEach((card) => {
  const element = createCardElement(card);
  addNewCard(element);
});


// Попап добавления карточек
const openPopupAdd = () => {
  openPopup(popupAdd);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы, так мы можем определить свою логику отправки.

  const name = placeNameInput.value;
  const link = placeLinkInput.value;

  const initialCards = {
    name,
    link,
  };
  
  const button = popupAdd.querySelector('.popup__save-button');
  button.classList.add('popup__save-button_disabled');
  button.setAttribute('disabled', true);
  addNewCard(createCardElement(initialCards));
  closePopup(popupAdd);
  evt.target.reset();
}

// Обработчики
openPopupEditButton.addEventListener('click', openPopupEdit);
formEditElement.addEventListener('submit', handleEditFormSubmit); // Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»

openPopupAddButton.addEventListener('click', openPopupAdd);
formAddElement.addEventListener('submit', handleAddFormSubmit); // Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»