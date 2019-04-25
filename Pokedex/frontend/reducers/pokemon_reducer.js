import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions'

function pokemonReducer(state={}, action) {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            return action.pokemon 
        case RECEIVE_POKE:
            newState[action.payload.pokemon.id] = action.payload.pokemon;
            return newState
        default:
            return state
    }
}



export default pokemonReducer;