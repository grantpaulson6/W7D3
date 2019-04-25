import React from 'react'
import Pokemon from './pokemon'

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {

    const Pokemons = this.props.pokemon.map( poke => {
        return <Pokemon key={poke.id} poke={poke} />
    })
    return (
        <div>
            <h1>Pokemon Index</h1>
            <ul>
                {Pokemons}
            </ul>
        </div>
    )
   }
}

export default PokemonIndex;