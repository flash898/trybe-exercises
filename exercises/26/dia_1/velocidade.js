const readline = require('readline-sync');

function calculaVelocidadeMedia() {
  const distancia = readline.questionInt('Qual a distância?');
  const tempo = readline.questionInt('Qual o tempo?');
  
  const velocidadeMedia = (distancia / tempo) ;
  
  console.log(`A velocidade média é de : ${velocidadeMedia}`);
}

module.exports = { calculaVelocidadeMedia };