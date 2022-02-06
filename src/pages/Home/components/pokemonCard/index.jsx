import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './style';
import { ADD_POKEMON_CART } from '../../../../constants/';
import ModalDetails from '../../modal';
import axios from 'axios';

function PokemonCard({ pokemon, price }) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const pokemonId = pokemon.url.match(/\d+/g).slice(1)[0];

  const handleClick = () => {
    dispatch({ type: ADD_POKEMON_CART, payload: { pokemon, price, pokemonId, quantity: 1 } });
  };
  
  return (
    <S.Wrapper>
        <S.Card>
          <img
              src={`https://cdn.traction.one/pokedex/pokemon/${pokemonId}.png`}
              style={{ width: '150px' }}
          />
              <div>
                <S.Title>{pokemon.name}</S.Title>
                <S.Details onClick={ () => {
                  setVisible(true);
                } }>+detalhes</S.Details>
                <S.Price>{ price }</S.Price>
              </div>
              <S.AddChartBtn onClick={ handleClick } >Adicionar no carrinho</S.AddChartBtn>

              {visible ? <ModalDetails close={ () => setVisible(false) } price={price} pokemon={pokemon} /> : null }
            </S.Card>
    </S.Wrapper>
  );
};

export default PokemonCard;
