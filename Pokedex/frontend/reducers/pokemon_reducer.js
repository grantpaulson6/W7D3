import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions'
import merge from 'lodash/merge'

function pokemonReducer(state={}, action) {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            merge(newState, action.pokemon);
            return newState;
        case RECEIVE_POKE:
        debugger
            newState[action.payload.pokemon.id] = action.payload.pokemon;
            return newState
        default:
            return state
    }
}



export default pokemonReducer;