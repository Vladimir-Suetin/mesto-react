import avatarPlug from '../images/unnamed.jpg';

function Main({onEditAvatar, onEditProfile, onAddPlace}) {
  return (
    <main>
      <section className='profile'>
        <div className='profile__avatar-edit'>
          <img src={avatarPlug} alt='аватар' className='profile__avatar' />
          <button
            type='button'
            className='profile__avatar-edit-button'
            aria-label='редактировать аватар'
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className='profile__info'>
          <h1 className='profile__name'>Жак Ив Кусто</h1>
          <button
            type='button'
            className='profile__edit-button'
            aria-label='редактировать профиль'
            onClick={onEditProfile}
          ></button>
          <p className='profile__job'>Исследователь океана</p>
        </div>
        <button
          type='button'
          className='profile__add-button'
          aria-label='добавить фотографии'
          onClick={onAddPlace}
        ></button>
      </section>

      <section className='cards' aria-label='фотокарточки'>
        <ul className='cards__photo-grid'></ul>
      </section>
    </main>
  );
}

export default Main;
