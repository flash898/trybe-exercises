const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');
const readline = require('readline-sync');

function chamarFuncao() {

  const choice = readline.questionInt('Qual script você quer rodar?\n Opções:\n 1- Calcular IMC;\n 2- Calcula Velocidade Média\n 3- Adivinhe o número\n');
  if(choice == 1) {
    imc.calculaIMC();
  } else if(choice == 2) {
    velocidade.calculaVelocidadeMedia();
  } else if(choice == 3) {
    sorteio.play();
  } else {
    console.log('Número inválido')
  }
}

chamarFuncao();