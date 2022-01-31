import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CALL_SAGA } from '../../constants';
import * as S from './styles.js';
import Header from '../../components/Header';
import Loading from '../Loading';
import PokemonCard from './components/pokemonCard';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(6);

  const { pokemons } = useSelector(state => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    document.title = 'Home';
  }, [pokemons]);

  useEffect(() => {
    dispatch({ type: CALL_SAGA  });
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : (
        <>
          <Header />
          <S.Container>
            <PokemonCard visible={ visible } setVisible={ setVisible } pokemons={ pokemons } />
          </S.Container>
        </>
      )}
    </>
  );
};
