import {
  GET_POKEMONS,
  ADD_POKEMON_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  DELETE_POKEMON_CART
} from '../../constants';

const INITIAL_STATE = {
  cart: [],
  pokemons: [],
};

const pokeMarket = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case ADD_POKEMON_CART:
      if (!state.cart.find(cartItem => cartItem.pokemon.name === action.payload.pokemon.name)) {
        return {
            ...state,
            cart: [...state.cart, action.payload]
           };
      }
    case INCREASE_QUANTITY:
      const { payload } = action;
      const item = state.cart.find(({ pokemon }) => pokemon.name === payload.pokemon.name);

      if (item) {
        return {
          ...state,
          cart: state.cart.map(item => item.pokemon.name=== payload.pokemon.name
            ? {
              ...item,
              quantity: item.quantity + 1,
            }
            : item
          )
        };
      }
      return {
        ...state,
          cart: [...state.cart, payload],
    };
    case DECREASE_QUANTITY:
      const itemSub = state.cart.find(({ pokemon }) => pokemon.name === action.payload.pokemon.name);

      if (itemSub) {
        return {
          ...state,
          cart: state.cart.map(item => item.pokemon.name === action.payload.pokemon.name
            ? {
              ...item,
              quantity: item.quantity !== 1 ? item.quantity - 1 : 1,
            }
            : item
          )
        };
      }
      return {
        ...state,
          cart: [...state.cart, action.payload],
    };
    case DELETE_POKEMON_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.pokemon.name !== action.payload.pokemon.name)
      };
    default:
      return state;
  }
};

export default pokeMarket;