import React from 'react';

import * as S from './style';

export default function pokemonCard({ pokemon, price }) {
  
  return (
    <S.Wrapper>
        <S.Card>
          <img
              src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.url.match(/\d+/g).slice(1)[0]}.png`}
              style={{ width: '150px' }}
          />
              <div>
                <S.Title>{pokemon.name}</S.Title>
                <S.Details>+detalhes</S.Details>
                <S.Price>{ price }</S.Price>
              </div>
              <S.AddChartBtn>Adicionar no carrinho</S.AddChartBtn>
            </S.Card>
    </S.Wrapper>
  );
};
