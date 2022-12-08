import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm title='Обновить аватар' name='avatar' isOpen={isOpen} buttonText={'Сохранить'} onClose={onClose}>
      <input
        name='avatar'
        type='url'
        className='popup__avatar-link popup__field popup__avatar-link_value'
        required
        placeholder='Введите ссылку'
      />
      <span className='popup__error popup__error_avatar'></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
