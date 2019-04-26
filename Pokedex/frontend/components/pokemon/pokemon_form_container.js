import { connect } from 'react-redux'
import PokemonForm from './pokemon_form'
import { birthPokemon } from '../../actions/pokemon_actions'




const mapDispatchToProps = dispatch => ({
    birthPokemon: (pokemon) => dispatch(birthPokemon(pokemon))
})

export default connect(null, mapDispatchToProps)(PokemonForm)