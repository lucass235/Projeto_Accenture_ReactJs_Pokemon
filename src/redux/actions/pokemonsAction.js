import {
  ADD_POKEMON_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  DELETE_POKEMON_CART
} from '../../constants';

export const addPokemon = (pokemon, price, pokemonId, quantity) => ({
  type: ADD_POKEMON_CART,
  payload:  {
    pokemon,
    price,
    pokemonId,
    quantity
  }
});

export const increaseQuantity = (payload) => ({
  type: INCREASE_QUANTITY,
  payload
});

export const decreaseQuantity = (payload) => ({
  type: DECREASE_QUANTITY, 
  payload
})

export const deletePokemonCart = (payload) => ({
  type: DELETE_POKEMON_CART,
  payload,
});


export const total = cart.reduce((sumTotal, pokemon) => {
  return sumTotal + pokemon.pokemon.price * pokemon.pokemon.amount;
}, 0);
