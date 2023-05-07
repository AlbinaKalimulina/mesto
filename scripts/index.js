// Объявляем переменные
const popup = document.querySelector('.popup'); // Общий попап

const openPopupEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const popupEditCloseButton = popupEdit.querySelector('.popup__close-button');
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
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

// Попап редактирования профиля
const openPopupEdit = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
}

const closePopupEdit = (evt) => {
  const isOverlay = evt.target.classList.contains('popup');
  const isCloseButton = evt.target.classList.contains('popup__close-button');

  if (isOverlay || isCloseButton || evt.key === 'Escape') {
    closePopup(popupEdit);
  }
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

  const closePopupImage = (evt) => {
    const isOverlay = evt.target.classList.contains('popup');
    const isCloseButton = evt.target.classList.contains('popup__close-button');

    if (isOverlay || isCloseButton || evt.key === 'Escape') {
      closePopup(popupImage);
    }
  }

  document.addEventListener('keydown', closePopupImage); // добавление обработчика события для закрытия попапа нажатием на Esc
  popupImage.addEventListener('click', closePopupImage);
  

  return cardElement;
};

const newCardAdd = (cardElement) => {
  elementGridContainer.prepend(cardElement);
}

initialCards.forEach((card) => {
  const element = createCardElement(card);
  newCardAdd(element);
});


// Попап добавления карточек
const openPopupAdd = () => {
  openPopup(popupAdd);
}

const closePopupAdd = (evt) => {
  const isOverlay = evt.target.classList.contains('popup');
  const isCloseButton = evt.target.classList.contains('popup__close-button');

  if (isOverlay || isCloseButton || evt.key === 'Escape') {
    closePopup(popupAdd);
  }
}

function handleAddFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы, так мы можем определить свою логику отправки.
  const name = placeNameInput.value;
  const link = placeLinkInput.value;

  const initialCards = {
    name,
    link,
  };

  newCardAdd(createCardElement(initialCards));
  closePopup(popupAdd);
  evt.target.reset();
}

// Обработчики
openPopupEditButton.addEventListener('click', openPopupEdit);
popupEdit.addEventListener('click', closePopupEdit);
formEditElement.addEventListener('submit', handleEditFormSubmit); // Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
document.addEventListener('keydown', closePopupEdit); // добавление обработчика события для закрытия попапа нажатием на Esc

openPopupAddButton.addEventListener('click', openPopupAdd);
popupAdd.addEventListener('click', closePopupAdd);
formAddElement.addEventListener('submit', handleAddFormSubmit); // Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
document.addEventListener('keydown', closePopupAdd); // добавление обработчика события для закрытия попапа нажатием на Esc



