import logo from '../images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <header class="header">
      <img src="<%=require('./images/logo.svg')%>" alt="логотип сайта Mesto" class="header__logo" />
    </header>
    <main>
      <section class="profile">
        <div class="profile__avatar-edit">
          <img src="<%=require('./images/unnamed.jpg')%>" alt="аватар" class="profile__avatar" />
          <button type="button" class="profile__avatar-edit-button" aria-label="редактировать аватар"></button>
        </div>
        <div class="profile__info">
          <h1 class="profile__name"></h1>
          <button type="button" class="profile__edit-button" aria-label="редактировать профиль"></button>
          <p class="profile__job"></p>
        </div>
        <button type="button" class="profile__add-button" aria-label="добавить фотографии"></button>
      </section>

      <section class="cards" aria-label="фотокарточки">
        <ul class="cards__photo-grid"></ul>
      </section>
    </main>

    <footer class="footer">
      <p class="footer__copyright">&copy; 2020 Mesto Russia</p>
    </footer>

    <div class="popup popup_edit_profile">
      <div class="popup__info">
        <h3 class="popup__title">Редактировать профиль</h3>
        <form name="popup-edit-profile" class="popup__container popup__container_edit-profile">
          <input
            name="name"
            type="text"
            class="popup__name popup__field popup__name_value"
            required
            placeholder="Имя"
            minlength="2"
            maxlength="40"
          />
          <span class="popup__error popup__error_name"></span>
          <input
            name="job"
            type="text"
            class="popup__job popup__field popup__job_value"
            required
            placeholder="О себе"
            minlength="2"
            maxlength="200"
          />
          <span class="popup__error popup__error_job"></span>
          <button disabled type="submit" class="popup__submit-button popup__submit-button_disabled">Сохранить</button>
        </form>
        <button type="button" class="popup__close-icon" aria-label="закрыть форму"></button>
      </div>
    </div>

    <div class="popup popup_add_image">
      <div class="popup__info">
        <h3 class="popup__title">Новое место</h3>
        <form name="popup-add-image" class="popup__container popup__container_add-image">
          <input
            name="image"
            type="text"
            class="popup__name-image popup__field popup__name-image_value"
            required
            placeholder="Введите название"
            minlength="2"
            maxlength="30"
          />
          <span class="popup__error popup__error_image"></span>
          <input
            name="link"
            type="url"
            class="popup__link-image popup__field popup__link-image_value"
            required
            placeholder="Ссылка на картинку"
          />
          <span class="popup__error popup__error_link"></span>
          <button disabled type="submit" class="popup__submit-button popup__submit-button_disabled">Создать</button>
        </form>
        <button type="button" class="popup__close-icon" aria-label="закрыть форму"></button>
      </div>
    </div>

    <div class="popup popup_delete_card">
      <div class="popup__info">
        <form name="popup-delete-card" class="popup__container">
          <h3 class="popup__title">Вы уверены?</h3>
          <button type="submit" class="popup__submit-button">Да</button>
        </form>
        <button type="button" class="popup__close-icon" aria-label="закрыть форму"></button>
      </div>
    </div>

    <div class="popup popup_avatar">
      <div class="popup__info">
        <h3 class="popup__title">Обновить аватар</h3>
        <form name="popup-edit_avatar" class="popup__container popup__container_edit_avatar">
          <input
            name="avatar"
            type="url"
            class="popup__avatar-link popup__field popup__avatar-link_value"
            required
            placeholder="Введите ссылку"
          />
          <span class="popup__error popup__error_avatar"></span>
          <button disabled type="submit" class="popup__submit-button popup__submit-button_disabled">Создать</button>
        </form>
        <button type="button" class="popup__close-icon" aria-label="закрыть форму"></button>
      </div>
    </div>

    <div class="popup popup_view_image">
      <div class="popup__wrapper">
        <button type="button" class="popup__close-icon" aria-label="закрыть форму"></button>
        <img src="#" alt="" class="popup__image" />
        <h3 class="popup__image-title"></h3>
      </div>
    </div>

    <template class="template-list">
      <li class="element">
        <img src="#" alt="" class="element__mask-group" />
        <div class="element__rectangle">
          <h2 class="element__title"></h2>
          <div class="element__likes">
            <button type="button" class="element__like-button" aria-label="поставить лайк"></button>
            <span class="element__number-likes"></span>
          </div>
        </div>
        <button type="button" class="element__button-remove"></button>
      </li>
    </template>
    </div>
  );
}

export default App;
