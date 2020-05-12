import React, { useState } from 'react';
import axios from 'axios';

const Fetch = ({setPokemon}) =>{
    const fetchPokemon = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(response=> {
            setPokemon(response.data.results);
        })
    }

    return(
        <div>
            <button onClick = {fetchPokemon}>Get Those Pokemon!</button>
        </div>
    )
}

export default Fetch;