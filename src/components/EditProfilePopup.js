import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title='Редактировать профиль'
      name='edit-profile'
      isOpen={isOpen}
      buttonText={'Сохранить'}
      onClose={onClose}
    >
      <input
        name='name'
        type='text'
        className='popup__name popup__field popup__name_value'
        required
        placeholder='Имя'
        minLength='2'
        maxLength='40'
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
      />
      <span className='popup__error popup__error_job'></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
