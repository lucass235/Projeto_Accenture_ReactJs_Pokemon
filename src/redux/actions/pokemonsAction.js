import { ADD_POKEMON_CART } from '../../constants';

export const addPokemon = (pokemon, price, pokemonId) => ({
  type: ADD_POKEMON_CART,
  payload:  {
    pokemon,
    price,
    pokemonId
  }
});

