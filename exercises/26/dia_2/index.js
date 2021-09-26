const readline = require('readline-sync');

const num1 = readline.questionInt('Digite o primeiro número');
const num2 = readline.questionInt('Digite o segundo número');
const num3 = readline.questionInt('Digite o terceiro número');

function calcularNumeros() {

  const promise = new Promise((resolve, reject) => {
    if( typeof num1 != 'number' || typeof num2 != 'number' || typeof num3 != 'number') {
      reject(new Error('Informe apenas números'))
    }

    const resultado = (num1 + num2) / num3;

    if(resultado < 50) {
      reject(new Error('Valor muito baixo'))
    }
    
    resolve(resultado);
    console.log(resultado);
  })

  return promise;
}

calcularNumeros();