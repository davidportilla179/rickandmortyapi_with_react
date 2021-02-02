import React from 'react';
import Header from '../components/Header';
import Characters from '../components/Characters';
import CharacterItem from '../components/CharacterItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'https://rickandmortyapi.com/api/character/?page=1';

const App = () => {
  const initialState = useInitialState(API);

  return (
    <div className='app'>
      <Header />
      <Characters>
        {
          initialState.results.map((item) => <CharacterItem key={item.id} {...item} />)
        }
      </Characters>
      <Footer />
    </div>
  );
};

export default App;
