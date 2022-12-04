import avatarPlug from '../images/unnamed.jpg';

function Main() {
  const handleEditAvatarClick = () => {
    document.querySelector('.popup_avatar').classList.add('popup_opened')
  }

  const handleEditProfileClick = () => {
    document.querySelector('.popup_edit_profile').classList.add('popup_opened')
  }

  const handleAddPlaceClick = () => {
    document.querySelector('.popup_add_image').classList.add('popup_opened')
  }
  return (
    <main>
      <section className='profile'>
        <div className='profile__avatar-edit'>
          <img src={avatarPlug} alt='аватар' className='profile__avatar' />
          <button type='button' className='profile__avatar-edit-button' aria-label='редактировать аватар' onClick={handleEditAvatarClick}></button>
        </div>
        <div className='profile__info'>
          <h1 className='profile__name'>Жак Ив Кусто</h1>
          <button type='button' className='profile__edit-button' aria-label='редактировать профиль' onClick={handleEditProfileClick}></button>
          <p className='profile__job'>Исследователь океана</p>
        </div>
        <button type='button' className='profile__add-button' aria-label='добавить фотографии' onClick={handleAddPlaceClick}></button>
      </section>

      <section className='cards' aria-label='фотокарточки'>
        <ul className='cards__photo-grid'></ul>
      </section>
    </main>
  );
}

export default Main;
