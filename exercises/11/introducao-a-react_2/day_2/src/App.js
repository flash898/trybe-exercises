
import React from 'react';
import './App.css';
import pokemons from './Data'
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return (
      <Pokedex pokemons={pokemons}/>
      )
  }
}

export default App;
