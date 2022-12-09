function Card({ name, link, likes, onCardClick }) {
  function handleCardClick() {
    onCardClick({ name, link });
  }
  return (
    <li className='element'>
      <img src={link} alt={name} className='element__mask-group' onClick={handleCardClick} />
      <div className='element__rectangle'>
        <h2 className='element__title'>{name}</h2>
        <div className='element__likes'>
          <button type='button' className='element__like-button' aria-label='поставить лайк'></button>
          <span className='element__number-likes'>{likes.length}</span>
        </div>
      </div>
      <button type='button' className='element__button-remove'></button>
    </li>
  );
}

export default Card;
