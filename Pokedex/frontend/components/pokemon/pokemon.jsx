import React from 'react'

const Pokemon = ({poke}) => {
    return (
    <li>
        <img src={poke.image_url} alt="this image is broken" height="25" width="25"></img>
        {poke.name}
    </li>
)};

export default Pokemon

    // < img src = { pokemon.image_url } alt = "this image is broken" height = "25" width = "25" ></img >