import PopupWithForm from './PopupWithForm';

function AddPlaceImagePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm title='Новое место' name='add-image' isOpen={isOpen} buttonText={'Создать'} onClose={onClose}>
      <input
        name='image'
        type='text'
        className='popup__name-image popup__field popup__name-image_value'
        required
        placeholder='Введите название'
        minLength='2'
        maxLength='30'
      />
      <span className='popup__error popup__error_image'></span>
      <input
        name='link'
        type='url'
        className='popup__link-image popup__field popup__link-image_value'
        required
        placeholder='Ссылка на картинку'
      />
      <span className='popup__error popup__error_link'></span>
    </PopupWithForm>
  );
}

export default AddPlaceImagePopup;
