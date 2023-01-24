import React from 'react';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, submitButton }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }
  
  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name, link });
  }

  return (
    <PopupWithForm
      title='Новое место'
      name='add-image'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitButton={submitButton}
    >
      <input
        name='image'
        type='text'
        className='popup__name-image popup__field popup__name-image_value'
        required
        placeholder='Введите название'
        minLength='2'
        maxLength='30'
        onChange={handleChangeName}
      />
      <span className='popup__error popup__error_image'></span>
      <input
        name='link'
        type='url'
        className='popup__link-image popup__field popup__link-image_value'
        required
        placeholder='Ссылка на картинку'
        onChange={handleChangeLink}
      />
      <span className='popup__error popup__error_link'></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
