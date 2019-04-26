
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

export const createPokemon = (pokemon) => (
    $.ajax({
        method: 'POST',
        url: '/api/pokemons',
        data: {
            pokemon
        }
    })
)