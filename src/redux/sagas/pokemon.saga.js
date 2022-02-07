import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import { GET_POKEMONS, CALL_SAGA } from '../../constants';

function apiGet() {
  return axios.get('https://pokeapi.co/api/v2/generation/1/')
  .then((res) => res.data.pokemon_species) 
  .catch((err) => console.log(err));
};

function* asynGetPokemons() {
  const response = yield call(apiGet);
  yield put({ type: GET_POKEMONS, payload: response });
};

export default function* rootSaga() {
  yield takeLatest(CALL_SAGA, asynGetPokemons);
};