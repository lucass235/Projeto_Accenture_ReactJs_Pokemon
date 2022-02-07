import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';

import { CALL_SAGA } from '../../constants';
import * as S from './styles.js';
import Header from '../../components/Header';
import Loading from '../Loading';
import PokemonCard from './components/PokemonCard';
import Carousel from './components/Carousel';

const GRID_STYLES = {
  paddingLeft: '50px',
  paddingRight: '50px',
  paddingTop: '30px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(6);
  const [price, setPrice] = useState(Math.floor(Math.random() * 100000) + 1);
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

  const showMorePokemons = () => {
    setVisible((prevValues) => prevValues + 3);
  };

  return (
    <>
      {isLoading ? <Loading /> : (
        <>
          <Header/>
          <Carousel />
          <S.Container>

            <Grid style={ GRID_STYLES } container spacing={4}>
              {pokemons && pokemons.slice(0, visible).map((pokemon, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4}>
                  <PokemonCard price={price} pokemon={pokemon} key={idx} />
                </Grid>
              ))}
            <S.Button onClick={ showMorePokemons } >Mostrar mais</S.Button>
            </Grid>
          </S.Container>
        </>
      )}
    </>
  );
};


