import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/rickandmortylogo.png';

const Header = () => {
  return (
    <>
      <header className='header'>
        <img src={logo} alt='' />
      </header>
    </>
  );
};

export default Header;
