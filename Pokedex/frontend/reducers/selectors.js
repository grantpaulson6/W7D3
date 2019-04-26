
export const selectAllPokemon = (state) => {
    return Object.values(state.entities.pokemon)
}

export const selectPokemonItems = (state, poke_id) => {
    const pokemon = state.entities.pokemon[poke_id];
    if (pokemon) {
        return pokemon.item_ids.map( item_id => state.entities.items[item_id] )
    }
    return [];
}