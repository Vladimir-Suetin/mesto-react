function Card({ card }) {
  return (
    <li className='element'>
      <img src={card.link} alt={card.name} className='element__mask-group' />
      <div className='element__rectangle'>
        <h2 className='element__title'>{card.name}</h2>
        <div className='element__likes'>
          <button type='button' className='element__like-button' aria-label='поставить лайк'></button>
          <span className='element__number-likes'>{card.likes}</span>
        </div>
      </div>
      <button type='button' className='element__button-remove'></button>
    </li>
  );
}

export default Card;
