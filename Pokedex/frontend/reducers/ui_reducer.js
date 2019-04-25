import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions'

function uiReducer(state = {}, action) {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch (action.type) {

        default:
            return state
    }
}



export default uiReducer;