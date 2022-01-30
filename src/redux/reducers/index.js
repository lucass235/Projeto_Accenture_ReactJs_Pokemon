import { combineReducers } from 'redux';
import pokeMarket from './pokemonsReducer';

const rootReducers = combineReducers({ pokeMarket });

export default rootReducers;