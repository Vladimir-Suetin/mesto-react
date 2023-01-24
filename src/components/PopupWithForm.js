import React, { useState } from 'react';

function PopupWithForm({ title, name, children, isOpen, onClose, onSubmit, submitButton}) {

  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className='popup__info'>
        <h3 className='popup__title'>{title}</h3>
        <form name={`popup_${name}`} className={`popup__container popup__container_edit_${name}`} onSubmit={onSubmit}>
          {children}
          <button type='submit' className={`popup__submit-button ${submitButton.disabled && 'popup__submit-button_disabled'}`} disabled={submitButton.disabled ? true : false}>
            {submitButton.text}
          </button>
        </form>
        <button type='button' className='popup__close-icon' aria-label='закрыть форму' onClick={onClose}></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
