import { combineReducers } from 'redux';
import pokeMarket from './pokemonsReducer';

const rootReducers = combineReducers({
  pokemon: pokeMarket,
 });

export default rootReducers;