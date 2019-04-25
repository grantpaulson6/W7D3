
export const fetchAllPokemon = () => (
    $.ajax({
        method: 'GET',
        url: '/api/pokemons'
    })
)

export const fetchPokemon = (pokemon_id) => (
    $.ajax({
        method: 'GET',
        url: `/api/pokemons/${pokemon_id}`
    })
)
window.fetchPokemon = fetchPokemon;

window.fetchAllPokemon = fetchAllPokemon