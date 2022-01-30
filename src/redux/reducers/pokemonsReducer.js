import { GET_POKEMONS } from '../../constants';

const INITIAL_STATE = {
  cart: [],
  pokemons: [],
  teste: 'testando a porra toda do redux'
};

const pokeMarket = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.pokemons };  
    default:
      return state;
  }
};

export default pokeMarket;