import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function ConfirmDeletePopup({isOpen, onClose, submitButton}) {
  
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
      <PopupWithForm
      title="Вы уверены?"
        name="confirm"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        submitButton={submitButton}
      />
  )
}

export default ConfirmDeletePopup