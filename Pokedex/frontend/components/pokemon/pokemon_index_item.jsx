import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({poke}) => {
    
    return (
    <li>
        <Link to={"/pokemon/" + poke.id}>
            <img src={poke.image_url} alt="this image is broken" height="25" width="25"></img>
            {poke.name}
        </Link>
    </li>
)};

export default PokemonIndexItem

    // < img src = { pokemon.image_url } alt = "this image is broken" height = "25" width = "25" ></img >