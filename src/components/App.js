import logo from '../images/logo.svg';
import avatarPlug from '../images/unnamed.jpg'
import '../index.css';

function App() {
  return (
    <div className='page'>
      <header className='header'>
        <img src={logo} alt='логотип сайта Mesto' className='header__logo' />
      </header>
      <main>
        <section className='profile'>
          <div className='profile__avatar-edit'>
            <img src={avatarPlug} alt='аватар' className='profile__avatar' />
            <button type='button' className='profile__avatar-edit-button' aria-label='редактировать аватар'></button>
          </div>
          <div className='profile__info'>
            <h1 className='profile__name'>Жак Ив Кусто</h1>
            <button type='button' className='profile__edit-button' aria-label='редактировать профиль'></button>
            <p className='profile__job'>Исследователь океана</p>
          </div>
          <button type='button' className='profile__add-button' aria-label='добавить фотографии'></button>
        </section>

        <section className='cards' aria-label='фотокарточки'>
          <ul className='cards__photo-grid'></ul>
        </section>
      </main>

      <footer className='footer'>
        <p className='footer__copyright'>&copy; 2020 Mesto Russia</p>
      </footer>

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

      <div className='popup popup_view_image'>
        <div className='popup__wrapper'>
          <button type='button' className='popup__close-icon' aria-label='закрыть форму'></button>
          <img src='#' alt='' className='popup__image' />
          <h3 className='popup__image-title'></h3>
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
