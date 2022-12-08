function Main({onEditAvatar, onEditProfile, onAddPlace, userAvatar, userName, userDescription}) {
  return (
    <main>
      <section className='profile'>
        <div className='profile__avatar-edit'>
          <img src={userAvatar} alt='аватар' className='profile__avatar'/>
          <button
            type='button'
            className='profile__avatar-edit-button'
            aria-label='редактировать аватар'
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className='profile__info'>
          <h1 className='profile__name'>{userName}</h1>
          <button
            type='button'
            className='profile__edit-button'
            aria-label='редактировать профиль'
            onClick={onEditProfile}
          ></button>
          <p className='profile__job'>{userDescription}</p>
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
