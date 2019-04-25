import React from 'react'
import PokemonIndexItem from './pokemon_index_item'
import { Route } from 'react-router-dom'
import PokemonDetailContainer from './pokemon_detail_container'

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {

    const Pokemons = this.props.pokemon.map( poke => {
        return <PokemonIndexItem key={poke.id} poke={poke} />
    })
    return (
        <div>
            <h1>Pokemon Index</h1>
            <Route path="/pokemon/:id" component={PokemonDetailContainer} />
            <ul>
                {Pokemons}
            </ul>
        </div>
    )
   }
}

export default PokemonIndex;