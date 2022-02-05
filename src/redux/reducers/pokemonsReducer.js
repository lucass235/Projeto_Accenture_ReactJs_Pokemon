import { GET_POKEMONS, ADD_POKEMON_CART } from '../../constants';

const INITIAL_STATE = {
  cart: [],
  pokemons: [],
};

const pokeMarket = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case ADD_POKEMON_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
       };  
    default:
      return state;
  }
};

export default pokeMarket;