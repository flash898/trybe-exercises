const readline = require('readline-sync');

function play () {
  const numero = readline.questionInt('Qual o número?');
  const randomNumber = Math.floor(Math.random() * 10 + 1);

  if (randomNumber === numero) {
    console.log(`Parabéns, numero correto!`);  
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
  }

  const playAgain = readline.question('Deseja jogar novamente? (sim ou não)');

  if( playAgain === "não" ) {
    console.log("Obrigado por jogar!");
  } else {
    play();
  }
}

module.exports = { play };