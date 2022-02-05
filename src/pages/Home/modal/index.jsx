import React, { useEffect, useState } from "react";
import axios from 'axios';
import * as S from "./style";
import { BsXLg } from 'react-icons/bs';

function ModalDetails ({ pokemon, price, close }) {
    const [pokemonInfo, setPokemonInfo] = useState();
   
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.url.match(/\d+/g).slice(1)[0]}`)
            .then(({ data }) => setPokemonInfo(data))
            .catch(err => console.log(err));
    }, [pokemon.url]);

    return (
       <>
        {pokemonInfo ? (
          <S.Modal>
            <S.Window>
              <S.BoxLeft>
                 <S.Pokemon src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.url.match(/\d+/g).slice(1)[0]}.png`} alt={`imagem do pokemon ${pokemon.name}`} /> 
                 </S.BoxLeft>
              <S.BoxRight>
                <S.IconCloser onClick={ close }> <BsXLg/> </S.IconCloser>
                <div>
                  <S.NamePokemon>{ pokemon.name }</S.NamePokemon>
                  {pokemonInfo.types && pokemonInfo.types.map(({ type }) => (
                    <S.Type>{type.name}</S.Type>
                  ))}
                </div>
                <S.DetailsDescription>
                    <p><strong>Vida:</strong> {pokemonInfo?.stats[0].base_stat}</p>
                    <p><strong>Ataque:</strong> {pokemonInfo?.stats[1].base_stat}</p>
                    <p><strong>Defesa:</strong> {pokemonInfo?.stats[2].base_stat}</p>
                    <p><strong>Velocidade:</strong> {pokemonInfo?.stats[5].base_stat}</p>
                </S.DetailsDescription>
                <S.Card> 
                  <S.Price style={{ marginRight: 5 }}>{ price }</S.Price>
                <S.Button>Adicionar ao carrinho</S.Button>
                </S.Card>
              </S.BoxRight>
            </S.Window>
         </S.Modal>
        ) : null}
       </>
    );
}
export default ModalDetails;