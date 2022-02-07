import { ADD_POKEMON_CART } from '../../constants';

export const addPokemon = (pokemon) => ({
  type: ADD_POKEMON_CART,
  pokemon
});