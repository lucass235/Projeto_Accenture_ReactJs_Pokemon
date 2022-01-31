import React from 'react';
import Grid from '@mui/material/Grid';

import * as S from './style';

const GRID_STYLES = {
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingTop: '100px',
  };
export default function pokemonCard({ pokemons, visible, setVisible }) {
  const pokemonId = pokemons[0].url.match(/\d+/g).slice(1)[0];

  const showMorePokemons = () => {
    setVisible((prevValues) => prevValues + 3);
  };
  
  return (
    <S.Wrapper>
      <Grid style={ GRID_STYLES } container spacing={4}>
        {pokemons && pokemons.slice(0, visible).map((pokemon, idx) => (
          <Grid key={idx} item xs={12} sm={6} md={4} >
            <S.Card>
              <img
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.url.match(/\d+/g).slice(1)[0]}.png`}
                style={{ width: '150px' }}
              />
              <div>
                <S.Title>{pokemon.name}</S.Title>
                <S.Details>+detalhes</S.Details>
                <S.Price>
                  {new Intl.NumberFormat('pt-br',
                  { style: 'currency', currency: 'BRL' })
                    .format(Math.floor(Math.random() * 100000) + 1)}</S.Price>
              </div>
              <S.AddChartBtn>Adicionar no carrinho</S.AddChartBtn>
            </S.Card>
          </Grid>
        ))}
      </Grid>
      <S.Button onClick={ showMorePokemons }>Mostrar mais</S.Button>
    </S.Wrapper>
  );
};
