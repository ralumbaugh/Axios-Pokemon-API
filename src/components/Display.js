import React from 'react';

const Display = ({pokemon}) =>{
    return(
        <div>
            {
                pokemon.map((pokemon, i) =>
                <p key = {i}>{pokemon.name}</p>
                )
            }
        </div>
    )
}

export default Display;