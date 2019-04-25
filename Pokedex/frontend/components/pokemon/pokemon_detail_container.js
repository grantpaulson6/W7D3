import { connect } from 'react-redux'
import PokemonDetail from './pokemon_detail'
import { selectAllPokemon } from '../../reducers/selectors'
import { requestPoke } from '../../actions/pokemon_actions'
import React from 'react'
import { selectPokemonItems } from '../../reducers/selectors'

const mapStateToProps = (state, myProps) => {
   
    return {
    //is this right???
    pokemon: state.entities.pokemon[myProps.match.params.id],
    items: selectPokemonItems(state, myProps.match.params.id)
    }
}

const mapDispatchToProps = dispatch => ({
    requestPoke: poke_id => dispatch(requestPoke(poke_id))
})



export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)
