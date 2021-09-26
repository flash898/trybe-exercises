const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 10 + 1);

let resultado;

console.log(num1, num2, num3);

function calcularNumeros(num1, num2, num3) {

  const promise = new Promise((resolve, reject) => {
    if( typeof num1 != 'number' || typeof num2 != 'number' || typeof num3 != 'number') {
      reject(new Error('Informe apenas números'))
    }

    resultado = (num1 + num2) / num3;

    if(resultado < 50) {
      reject(new Error('Valor muito baixo'))
    }

    resolve(resultado);
  })

  return promise;
}

calcularNumeros(num1, num2, num3)
    .then(result => console.log(result))
    .catch (e => console.log(e.message));