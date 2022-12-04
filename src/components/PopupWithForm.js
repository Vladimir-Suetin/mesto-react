function PopupWithForm({ title, name, children }) {
  return (
    <div className={`popup popup_type_${name}`}>
      <div className='popup__info'>
        <h3 className='popup__title'>{title}</h3>
        <form name={`popup-edit_${name}`} className={`popup__container popup__container_edit_${name}`}>
          {children}
          <span className={`popup__error popup__error_${name}`}></span>
          <button disabled type='submit' className='popup__submit-button popup__submit-button_disabled'>
            Сохранить
          </button>
        </form>
        <button type='button' className='popup__close-icon' aria-label='закрыть форму'></button>
      </div>
    </div>
  );
}
