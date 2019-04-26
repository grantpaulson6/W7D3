import { fetchAllPokemon, fetchPokemon, createPokemon } from '../util/api_util'
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKE = "RECEIVE_POKE";

export const receiveAllPokemon = pokemon => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
})

export const requestAllPokemon = () => (dispatch) => (
    fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const receivePokemon = poke => ({
    type: RECEIVE_POKE,
    payload: poke
}) 

export const requestPoke = (pokemon_id) => (dispatch) => (
    fetchPokemon(pokemon_id)
    .then(poke => dispatch(receivePokemon(poke)))
)


export const birthPokemon = (pokemon) => dispatch => (
    createPokemon(pokemon)
    .then(poke => dispatch(receivePokemon(poke)))
)