const readline = require('readline-sync');

function calculaIMC() {
  const peso = readline.questionFloat('Qual seu peso?');
  const altura = readline.questionFloat('Qual sua altura? (Em metros)');
  
  const imc = (peso / (altura ^ 2)) ;
  
  console.log(`Seu imc é de ${imc}.`);
  
  if( imc < 18.5) {
    console.log("Abaixo do peso (magreza)");
  } else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal");
  } else if (imc >= 25.0 && imc <= 29.9) {
    console.log("Acima do peso (sobrepeso)");
  } else if (imc >= 30.0 && imc <= 34.9) {
    console.log("Obesidade I");
  } else if (imc >= 35.0 && imc <= 39.9) {
    console.log("Obesidade II");
  } else {
    console.log("Obesidade III e IV");
  }
}

module.exports = { calculaIMC };