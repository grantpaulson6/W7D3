import React from 'react';

class PokemonDetail extends React.Component {
    constructor(props) {
    
        super(props)
    }

    componentDidMount() {
      
        this.props.requestPoke(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id){
            this.props.requestPoke(this.props.match.params.id)
        }
    }

    render() {
        if (this.props.pokemon) {
            const items = this.props.items.map( item => <li key={item.id}>{item.name}</li> )
            return (
            <div>
                <h1>{this.props.pokemon.name}</h1>
    
                <ul>
                    <li>{this.props.pokemon.poke_type}</li>
                    <li>{this.props.pokemon.attack}</li>
                    <li>{this.props.pokemon.defense}</li>
                </ul>
                <ul>
                    {items}
                </ul>
    
                
            </div>
            )
        } else {
            return <div></div>
        }
    }

}

export default PokemonDetail