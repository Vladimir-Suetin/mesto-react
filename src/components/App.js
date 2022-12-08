import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlaceImagePopup from './AddPlaceImagePopup';
import api from '../utils/api';
import avatarPlug from '../images/unnamed.jpg';
import { useEffect, useState } from 'react';

function App() {
  // Состояние попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [userName, setUserName] = useState('Жак Ив Кусто');
  const [userDescription, setUserDescription] = useState('Исследователь океана');
  const [cards, setCards] = useState([]);
  const [userAvatar, setUserAvatar] = useState(avatarPlug);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        const { name, about: job, avatar, _id } = userData;
        setUserName(name);
        setUserDescription(job);
        setUserAvatar(avatar);
      })
      .catch((err) => api.logResponseError(err));
  });

  useEffect(() => {
    api
      .getCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => api.logResponseError(err));
  }, [cards])

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

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
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
      />
      <Footer />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <AddPlaceImagePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}></AddPlaceImagePopup>

      <div className='popup popup_edit_profile'>
        <div className='popup__info'>
          <h3 className='popup__title'>Редактировать профиль</h3>
          <form name='popup-edit-profile' className='popup__container popup__container_edit-profile'>
            <input
              name='name'
              type='text'
              className='popup__name popup__field popup__name_value'
              required
              placeholder='Имя'
              minLength='2'
              maxLength='40'
            />
            <span className='popup__error popup__error_name'></span>
            <input
              name='job'
              type='text'
              className='popup__job popup__field popup__job_value'
              required
              placeholder='О себе'
              minLength='2'
              maxLength='200'
            />
            <span className='popup__error popup__error_job'></span>
            <button disabled type='submit' className='popup__submit-button popup__submit-button_disabled'>
              Сохранить
            </button>
          </form>
          <button type='button' className='popup__close-icon' aria-label='закрыть форму'></button>
        </div>
      </div>

      <div className='popup popup_add_image'>
        <div className='popup__info'>
          <h3 className='popup__title'>Новое место</h3>
          <form name='popup-add-image' className='popup__container popup__container_add-image'>
            <input
              name='image'
              type='text'
              className='popup__name-image popup__field popup__name-image_value'
              required
              placeholder='Введите название'
              minLength='2'
              maxLength='30'
            />
            <span className='popup__error popup__error_image'></span>
            <input
              name='link'
              type='url'
              className='popup__link-image popup__field popup__link-image_value'
              required
              placeholder='Ссылка на картинку'
            />
            <span className='popup__error popup__error_link'></span>
            <button disabled type='submit' className='popup__submit-button popup__submit-button_disabled'>
              Создать
            </button>
          </form>
          <button type='button' className='popup__close-icon' aria-label='закрыть форму'></button>
        </div>
      </div>

      <div className='popup popup_delete_card'>
        <div className='popup__info'>
          <form name='popup-delete-card' className='popup__container'>
            <h3 className='popup__title'>Вы уверены?</h3>
            <button type='submit' className='popup__submit-button'>
              Да
            </button>
          </form>
          <button type='button' className='popup__close-icon' aria-label='закрыть форму'></button>
        </div>
      </div>

      <div className='popup popup_avatar'>
        <div className='popup__info'>
          <h3 className='popup__title'>Обновить аватар</h3>
          <form name='popup-edit_avatar' className='popup__container popup__container_edit_avatar'>
            <input
              name='avatar'
              type='url'
              className='popup__avatar-link popup__field popup__avatar-link_value'
              required
              placeholder='Введите ссылку'
            />
            <span className='popup__error popup__error_avatar'></span>
            <button disabled type='submit' className='popup__submit-button popup__submit-button_disabled'>
              Создать
            </button>
          </form>
          <button type='button' className='popup__close-icon' aria-label='закрыть форму'></button>
        </div>
      </div>

      <template className='template-list'>
        <li className='element'>
          <img src='#' alt='' className='element__mask-group' />
          <div className='element__rectangle'>
            <h2 className='element__title'></h2>
            <div className='element__likes'>
              <button type='button' className='element__like-button' aria-label='поставить лайк'></button>
              <span className='element__number-likes'></span>
            </div>
          </div>
          <button type='button' className='element__button-remove'></button>
        </li>
      </template>
    </div>
  );
}

export default App;
