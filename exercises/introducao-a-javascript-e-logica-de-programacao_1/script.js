// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para: adição, subtração, multiplicação, divisão e módulo.//

// let a = 2;
// let b = 3;
// let op = "divisão";

// switch(op){
//   case "adição":
//     console.log(a+b);
//     break;

//   case "subtração":
//     console.log(a-b);
//     break;
  
//   case "multiplicação":
//     console.log(a*b);
//     break;

//   case "divisão":
//     console.log(a/b);
//     break;

//   case "módulo":
//     console.log(a%b);
//     break;
// }

// 2- Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados. // 

// let num1 = 10;
// let num2 = 10;

// if (num2 > num1) {
//   console.log(num2 + " esse é o maior número!");
// } else if (num1 > num2) {
//   console.log(num1 + " esse é o maior número!");
// } else if (num1 = num2) {
//   console.log("Os números possuem o mesmo valor!");
// } 


// 3- Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.//

// let num1 = 10;
// let num2 = 1;
// let num3 = 15; 

// if (num1 > num2 && num1 > num3){
//   console.log(num1 + " esse é o maior!");
// } else if (num2 > num1 && num2 > num3){
//   console.log(num2 + " esse é o maior!");
// } else if (num3 > num1 && num3 > num2){
//   console.log(num3 + " esse é o maior!");
// } else if (num1 = num2 = num3){
//   console.log("Números iguais");
// }

// 4- Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.//

// let num1 = -1;

// if (num1 > 0){
//   console.log("Positive");
// } else if (num1 = 0){
//   console.log("zero")
// } else {
// console.log("Negative");
// }

//5- Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.//

// let angulo_1 = 30;
// let angulo_2 = 30;
// let angulo_3 = 120;

// let triangulo = angulo_1 + angulo_2 + angulo_3;

// if (triangulo >= 180 && angulo_1 > 0 && angulo_2 > 0 && angulo_3 > 0 ){
//   console.log(true);
// } else {
//   console.log(false);
// }

// 6- Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals 

let chessPiece = "HoRsE";
let chessPieceOrg = chessPiece.toLowerCase();
let movement = "L";
let msgMissingPiece = "Your piece could not be found.";

if (chessPieceOrg == "horse"){
  console.log(movement);
} else {
  console.log(msgMissingPiece);
}