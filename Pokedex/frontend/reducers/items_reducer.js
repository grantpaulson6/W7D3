import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions'

function itemsReducer(state = {}, action) {
    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_POKE:
            //currently overwriting 
            Object.values(action.payload.items).forEach( item => {
                newState[item.id] = item
            })
            return newState
        default:
            return state
    }
}



export default itemsReducer;