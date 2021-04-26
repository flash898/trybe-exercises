/* exercicio 1 */
const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(false);

/* exercicio 2 */
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

console.log(oddsAndEvens);

/* exercicio 3 */
let fact = (number) => {
  let sum = 1;
  for (let i = 1; i <= number; i += 1) {
    sum *= i;
  }
  return sum;
}
console.log(fact(4))

let fact = (number) => {
  let sum = 1;
  for (let i = number; i > 0; i -= 1) {
    sum *= i;
  }

  return sum;
}
console.log(fact(4))