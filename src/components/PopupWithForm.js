import React from 'react';

function PopupWithForm({ title, name, children, isOpen, onClose, onSubmit, submitButtonState }) {
  const drawerRef = React.useRef();

  React.useEffect(() => {
    if (drawerRef && isOpen) {
      drawerRef.current.focus();
    }
  }, [drawerRef, isOpen]);

  function handleOnMouseDown(evt) {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  }

  function handleClickEscape(evt) {
    console.log('pppp');
    if (evt.key === 'Escape') {
      onClose();
    }
  }
  return (
    <div
      className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}
      onMouseDown={handleOnMouseDown}
      onKeyDown={handleClickEscape}
      ref={drawerRef}
    >
      <div className='popup__info'>
        <h3 className='popup__title'>{title}</h3>
        <form name={`popup_${name}`} className={`popup__container popup__container_edit_${name}`} onSubmit={onSubmit}>
          {children}
          <button
            type='submit'
            className={`popup__submit-button ${submitButtonState.disabled && 'popup__submit-button_disabled'}`}
            disabled={submitButtonState.disabled ? true : false}
          >
            {submitButtonState.text}
          </button>
        </form>
        <button type='button' className='popup__close-icon' aria-label='закрыть форму' onClick={onClose}></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
