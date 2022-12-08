function PopupWithForm({ title, name, children, isOpen, onClose, buttonText }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className='popup__info'>
        <h3 className='popup__title'>{title}</h3>
        <form name={`popup_${name}`} className={`popup__container popup__container_edit_${name}`}>
          {children}
          <button disabled type='submit' className='popup__submit-button popup__submit-button_disabled'>
            {buttonText}
          </button>
        </form>
        <button type='button' className='popup__close-icon' aria-label='закрыть форму' onClick={onClose}></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
