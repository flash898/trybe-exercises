let n = 5;
let piramide = '';

//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

// for (let i =1; i<=n; i+=1){
//   piramide = '*****'
//   console.log(piramide);
// }

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

for(let i = 1; i<=n; i += 1){
  piramide += '*';
  console.log(piramide);
}

