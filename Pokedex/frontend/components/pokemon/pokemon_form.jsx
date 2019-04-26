import React from 'react'


class PokemonForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            poke_type: "asdfasdf",
            attack: 1,
            defense: 2,
            image_url: "asdfljfpsadj"

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateState(property) {
       return e =>  this.setState({ [property]: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();
        
        this.props.birthPokemon(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>Name:
                <input 
                type="text" 
                onChange={this.updateState("name")}
                value={this.state.name}
                />
            </label>
            <label>Type:
                <select 
                name="" id="" 
                onChange={this.updateState("poke_type")}
                value={this.state.type}
                ></select>
            </label>
          
            <label>Image_url:
                <input 
                type="text" 
                onChange={this.updateState("image_url")}
                value={this.state.image_url}
                />
            </label>
            <button >Make your pokemon!!!</button>
        </form>
        )}
}

export default PokemonForm