import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import defaultUserData from '../utils/defaultUserData';
import { useEffect, useState } from 'react';
import CurrentUserContext from '../context/CurrentUserContext';
import ConfirmDeletePopup from './ConfirmDeletePopup';

function App() {
  // Состояние попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = useState(false);

  // Состояние карточек и данных пользователя
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState(defaultUserData);

  // Состояние загрузки страницы
  const [isLoading, setIsLoading] = useState(true);

  // Состояние кнопки submit у форм
  const [submitButtonState, setSubmitButtonState] = useState({ text: '', disabled: false });

  // Получение данных пользователя и карточек
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setIsLoading(!isLoading);
        setCards(cardsData);
      })
      .catch((err) => api.logResponseError(err));
  }, []);

  // Функция работы с лайками
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((item) => (item._id === card._id ? newCard : item)));
      })
      .catch((err) => api.logResponseError(err));
  }

  // Функция обработчик добавления новой карточки
  function handleAddPlaceSubmit(data) {
    api.addNewCard(data).then((newCard) => {
      setCards([newCard, ...cards]);
      setSubmitButtonState({ text: 'Сохранение...' });
      closeAllPopups();
    });
  }

  // функция обработчик удаления карточки
  function handleCardDelete(cardId) {
    api
      .deleteCard(cardId)
      .then(() => {
        setCards(cards.filter((card) => card._id !== cardId));
        closeAllPopups();
      })
      .catch((err) => api.logResponseError(err));
  }

  // Функция обработки данных пользователя
  function handleUpdateUser(data) {
    api
      .setUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        setSubmitButtonState({ text: 'Сохранение...' });
        closeAllPopups();
      })
      .catch((err) => api.logResponseError(err));
  }

  // Функция обработки аватара
  function handleUpdateAvatar(data) {
    api
      .changeAvatar(data)
      .then((res) => {
        setCurrentUser(res);
        setSubmitButtonState({ text: 'Сохранение...' });
        closeAllPopups();
      })
      .catch((err) => api.logResponseError(err));
  }

  // Функции открытия/закрытия попапов
  function handleEditAvatarClick() {
    setSubmitButtonState({ text: 'Создать' });
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setSubmitButtonState({ text: 'Сохранить' });
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setSubmitButtonState({ text: 'Создать' });
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleConfirmDeletion() {
    setSubmitButtonState({ text: 'Да' });
    setIsConfirmDeletePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardClick={handleCardClick}
          onCardDelete={handleCardDelete}
          onConfirmDeletion={handleConfirmDeletion}
          isLoading={isLoading}
        />
        <Footer />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          submitButton={submitButtonState}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          submitButton={submitButtonState}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          submitButton={submitButtonState}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <ConfirmDeletePopup
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
          submitButton={submitButtonState}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
