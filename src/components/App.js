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

function App() {
  // Состояние попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  // Карточки
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);
  // Пользователь
  // const [userName, setUserName] = useState('Жак Ив Кусто');
  // const [userDescription, setUserDescription] = useState('Исследователь океана');
  // const [userAvatar, setUserAvatar] = useState(avatarPlug);
  const [currentUser, setCurrentUser] = useState(defaultUserData);

  // useEffect(() => {
  //   api
  //     .getUserInfo()
  //     .then((userData) => setCurrentUser(userData))
  //     .catch((err) => api.logResponseError(err));
  // }, []);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((err) => api.logResponseError(err));
  }, []);

  // useEffect(() => {
  //   api
  //     .getCards()
  //     .then((cardsData) => {
  //       return setCards(cardsData);
  //     })
  //     .catch((err) => api.logResponseError(err));
  // }, []);

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
      closeAllPopups();
    })
  }

  // функция обработчик удаления карточки
  function handleCardDelete(cardId) {
    api
      .deleteCard(cardId)
      .then(() => {
        setCards(cards.filter((card) => card._id !== cardId));
      })
      .catch((err) => api.logResponseError(err));
  }

  // Функция обработки данных пользователя
  function handleUpdateUser(data) {
    api
      .setUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
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
        closeAllPopups();
      })
      .catch((err) => api.logResponseError(err));
  }

  // Функции открытия/закрытия попапов
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
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
          //  userAvatar={userAvatar}
          //  userName={userName}
          //  userDescription={userDescription}
          cards={cards}
          onCardLike={handleCardLike}
          onCardClick={handleCardClick}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
