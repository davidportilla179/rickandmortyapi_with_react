import React from 'react';
import '../assets/styles/components/Characters.scss';

const Characters = ({ children }) => {
  return (
    <div className='characters'>
      {children}
    </div>
  );
};

export default Characters;
