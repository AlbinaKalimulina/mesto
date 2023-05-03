// Попап редактирования профиля

const openPopupEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const popupCloseButton = document.querySelector('.popup__close-button');
let formEditElement = document.querySelector('.popup_edit_type_container'); // Находим форму в DOM
let nameInput = document.querySelector('.popup__input_type_name'); // Находим поля формы в DOM
let jobInput = document.querySelector('.popup__input_type_descrition'); // Находим поля формы в DOM
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__description');

function openPopupEdit() {
  popupEdit.classList.add('popup_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopupEdit(evt) {
  const isOverlay = evt.target.classList.contains('popup');
  const isCloseButton = evt.target.classList.contains('popup__close-button');

  if (isOverlay || isCloseButton) {
    popupEdit.classList.remove('popup_opened');
  }
}

openPopupEditButton.addEventListener('click', openPopupEdit);
popupEdit.addEventListener('click', closePopupEdit);


// // Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleEditFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  // Вставьте новые значения с помощью textContent
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  popupEdit.classList.remove('popup_opened');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditElement.addEventListener('submit', handleEditFormSubmit);


// Карточки template

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.getElementById('card-template');
const elementGridContainer = document.querySelector('.element');

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
  const popupImage = document.querySelector('.popup_image');
  let popupCardImage = document.querySelector('.popup__card-image');
  let popupCardDescription = document.querySelector('.popup__card-description');

  function openPopupImage() {
    popupImage.classList.add('popup_opened');
    popupCardImage.src = cardData.link;
    popupCardImage.alt = cardData.name;
    popupCardDescription.textContent = cardData.name;
  }

  cardImage.addEventListener('click', openPopupImage);

  function closePopupImage(evt) {
    const isOverlay = evt.target.classList.contains('popup__image');
    const isCloseButton = evt.target.classList.contains('popup__close-button');

    if (isOverlay || isCloseButton) {
      popupImage.classList.remove('popup_opened');
    }
  }

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

const openPopupAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');
let formAddElement = document.querySelector('.popup_add_type_container'); // Находим форму в DOM
let placeNameInput = document.querySelector('.popup__input_type_place-name'); // Находим поля формы в DOM
let placeLinkInput = document.querySelector('.popup__input_type_place-link'); // Находим поля формы в DOM
let placeName = document.querySelector('.card__place-name');
let placeLink = document.querySelector('.card__image');

function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
}

function closePopupAdd(evt) {
  const isOverlay = evt.target.classList.contains('popup');
  const isCloseButton = evt.target.classList.contains('popup__close-button');

  if (isOverlay || isCloseButton) {
    popupAdd.classList.remove('popup_opened');
  }
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const name = placeNameInput.value;
  const link = placeLinkInput.value;

  const initialCards = {
    name,
    link,
  };

  newCardAdd(createCardElement(initialCards));
  popupAdd.classList.remove('popup_opened');
}

openPopupAddButton.addEventListener('click', openPopupAdd);
popupAdd.addEventListener('click', closePopupAdd);
formAddElement.addEventListener('submit', handleAddFormSubmit);