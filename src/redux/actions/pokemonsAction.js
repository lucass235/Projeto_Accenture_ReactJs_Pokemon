import { GET_POKEMONS } from '../../constants/index';

export const getPokemons = (pokemons) => ({
  type: GET_POKEMONS,
  pokemons,
});