import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [characters, setCharacters] = useState({ info: {}, results: [] });
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }, []);
  return characters;
};

export default useInitialState;
