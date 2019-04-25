
export const fetchAllPokemon = () => (
    $.ajax({
        method: 'GET',
        url: '/api/pokemons'
    })
)

window.fetchAllPokemon = fetchAllPokemon