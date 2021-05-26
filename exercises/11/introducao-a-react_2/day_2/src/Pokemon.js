import React from 'react'

// 1 - Pokemon : como o próprio nome diz, esse componente representa um pokemon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
       <div>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Weight {averageWeight.value}{averageWeight.measurementUnit}</p>
        <img src={image} />
       </div>
    );
  }
}

export default Pokemon;
// nome do pokemon;
// tipo do pokemon;
// peso médio do pokemon, acompanhado da unidade de medida usada;
// imagem do pokemon