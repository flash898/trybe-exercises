let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for (let number of numbers){
//   console.log(number);
// }

// 2- Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

// let resultado = 0;
// for (let number of numbers){
//   resultado += number;
// }
// console.log(resultado);

// 3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// let resultado = 0;

// for(let i=0; i < numbers.length; i += 1){
//   resultado += numbers[i];
// }
// console.log(resultado/numbers.length);

// 4- Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let resultado = 0;
// let sum;

// for(let i=0; i < numbers.length; i += 1){
//   resultado += numbers[i];
//   sum = resultado/numbers.length;
    
// } 

// if(sum > 20){
//   console.log("Valor maior que 20!")
// } else {
//   console.log("Valor menor ou igual a 20!")
// }


// 5- Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let maior = 0;
// for (let i=0; i < numbers.length; i += 1){

//     if(numbers[i] > maior){
//       maior = numbers[i];
//     }
//   }
// console.log(maior);

// 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let odds = [];

// for (let i =0; i<numbers.length;i += 1){

//   if(numbers[i] % 2 != 0){
//     odds.push(numbers[i]);
//   }
// } 

// if (odds.length != 0){
//   console.log(odds);
//   console.log("Existem ", odds.length, " números ímpares!")
// } else {
//   console.log("Nenhum valor ímpar encontrado!");
// }


// 7- Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor = 0;
for (let i=0; i < numbers.length; i += 1){
// 
    if(numbers[i] < numbers[i+1]){
      menor = numbers[i];
    }
  }
console.log(menor);

// 8- Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
// 9- Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
