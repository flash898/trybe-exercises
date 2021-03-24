/* 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para: adição, subtração, multiplicação, divisão e módulo.*/

let a = 2;
let b = 3;
let op = "divisão";

switch(op){
  case "adição":
    console.log(a+b);
    break;

  case "subtração":
    console.log(a-b);
    break;
  
  case "multiplicação":
    console.log(a*b);
    break;

  case "divisão":
    console.log(a/b);
    break;

  case "módulo":
    console.log(a%b);
    break;
}

