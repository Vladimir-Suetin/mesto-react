function ImagePopup() {
  return (
    <div className='popup popup_view_image'>
      <div className='popup__wrapper'>
        <button type='button' className='popup__close-icon' aria-label='закрыть форму'></button>
        <img src='#' alt='' className='popup__image' />
        <h3 className='popup__image-title'></h3>
      </div>
    </div>
  );
}

export default ImagePopup;
