function ImagePopup({data, onClose}) {
  return (
    <div className={`popup popup_view_image ${data !==null && 'popup_opened'}`} >
      <div className='popup__wrapper'>
        <button type='button' className='popup__close-icon' aria-label='закрыть форму' onClick={onClose}></button>
        <img src={data.link} alt={data.name} className='popup__image' />
        <h3 className='popup__image-title'>{data.name}</h3>
      </div>
    </div>
  );
}

export default ImagePopup;
