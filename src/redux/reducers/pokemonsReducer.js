import { GET_POKEMONS } from '../../constants';

const INITIAL_STATE = {
  cart: [],
  pokemons: [],
};

const pokeMarket = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };  
    default:
      return state;
  }
};

export default pokeMarket;