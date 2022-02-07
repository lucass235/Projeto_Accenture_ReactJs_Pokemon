import React, { useEffect, useState } from "react";
import axios from 'axios';
import * as S from "./style";
import { BsXLg } from 'react-icons/bs';

function ModalDetails ({ pokemon, price, close }) {
    const [pokemonInfo, setPokemonInfo] = useState();
   
   
    // function addCarrinho () {
    //     alert("Adicionado ao carrinho");
    // }

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.url.match(/\d+/g).slice(1)[0]}`)
            .then(res => setPokemonInfo(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <S.Modal>
            <S.Window>
                <S.BoxLeft>
                    <S.Pokemon src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.url.match(/\d+/g).slice(1)[0]}.png`} alt={`imagem do pokemon ${pokemon.name}`} /> 
                </S.BoxLeft>
                <S.BoxRight>
            <S.IconCloser onClick={ close }> <BsXLg/> </S.IconCloser>
            <S.NamePokemon>{ pokemon.name }</S.NamePokemon>
            <S.DescriptionPokemon>
                <p>{pokemonInfo?.stats[0].base_stat}</p>
            </S.DescriptionPokemon>
            <S.Card> 
                <S.Price>
                    { price }
                </S.Price>
            <S.Button>Adicionar ao carrinho</S.Button>
            </S.Card>
            </S.BoxRight>
            </S.Window>
        </S.Modal>
    );
}
export default ModalDetails;