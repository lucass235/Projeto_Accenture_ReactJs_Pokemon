import React, { useState } from 'react';

import * as S from './style';
import ModalDetails from '../../modal';

function PokemonCard({ pokemon, price }) {
  const [visible, setVisible] = useState(false);

  return (
    <S.Wrapper>
        <S.Card>
          <img
              src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.url.match(/\d+/g).slice(1)[0]}.png`}
              style={{ width: '150px' }}
          />
              <div>
                <S.Title>{pokemon.name}</S.Title>
                <S.Details onClick={ () => setVisible(true) }>+detalhes</S.Details>
                <S.Price>{ price }</S.Price>
              </div>
              <S.AddChartBtn>Adicionar no carrinho</S.AddChartBtn>
              {visible ? <ModalDetails close={ () => setVisible(false) } price={price} pokemon={pokemon} /> : null }
            </S.Card>
    </S.Wrapper>
  );
};

export default PokemonCard;
