import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlaceImagePopup from './AddPlaceImagePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import avatarPlug from '../images/unnamed.jpg';
import { useEffect, useState } from 'react';
import CurrentUserContext from '../context/CurrentUserContext'

function App() {
  // Состояние попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  // Карточки
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);
  // Пользователь
  const [userName, setUserName] = useState('Жак Ив Кусто');
  const [userDescription, setUserDescription] = useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = useState(avatarPlug);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo().then(setCurrentUser).catch((err) => api.logResponseError(err));
  }, [])

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userData, cardsData]) => {
        const { name, about: job, avatar } = userData;
        setUserName(name);
        setUserDescription(job);
        setUserAvatar(avatar);

        setCards(cardsData);
      })
      .catch((err) => api.logResponseError(err));
  }, []);

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
        userAvatar={userAvatar}
        userName={userName}
        userDescription={userDescription}
        cards={cards}
        onCardClick={handleCardClick}
      />
      <Footer />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <AddPlaceImagePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}></AddPlaceImagePopup>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
