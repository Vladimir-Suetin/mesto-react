import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../context/CurrentUserContext';
import { useEffect, useState } from 'react';

function EditProfilePopup({ isOpen, onClose, onUpdateUser}) {
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);
  // Стейт имени и занятия
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      title='Редактировать профиль'
      name='edit-profile'
      isOpen={isOpen}
      buttonText={'Сохранить'}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        name='name'
        type='text'
        className='popup__name popup__field popup__name_value'
        required
        placeholder='Имя'
        minLength='2'
        maxLength='40'
        onChange={handleChangeName}
        value={name}
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
        onChange={handleChangeDescription}
        value={description}
      />
      <span className='popup__error popup__error_job'></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
