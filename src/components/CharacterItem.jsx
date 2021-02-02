import React from 'react';
import '../assets/styles/components/CharacterItem.scss';

const CharacterItem = ({ name, image, gender }) => {
  return (
    <div className='character-item'>
      <img className='character-item__img' src={image} alt={name} />
      <h1>{name}</h1>
      <p>{gender}</p>
    </div>
  );
};

export default CharacterItem;
