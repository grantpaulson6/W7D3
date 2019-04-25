import React from 'react'
import PokemonIndexContainer from './pokemon/pokemon_index_container'
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';


const App = () => (
    <div>
        <h1>THIS IS APP</h1>
        <Route path="/" component={PokemonIndexContainer}/>
    </div>
)

export default App