import React from 'react'
import pokemons from './Data'
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  render() {
    return (pokemons.map(pokemon => <Pokemon pokemon={pokemon} />))
  }
}

export default Pokedex;