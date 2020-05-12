import React, { useState } from 'react';
import './App.css';
import Fetch from './components/Fetch'
import Display from './components/Display'

function App() {
  const [pokemon, setPokemon] = useState([]);
  
  return (
    <div className="App">
      <Fetch setPokemon = {setPokemon}/>
      <Display pokemon = {pokemon}/>
    </div>
  );
}

export default App;
