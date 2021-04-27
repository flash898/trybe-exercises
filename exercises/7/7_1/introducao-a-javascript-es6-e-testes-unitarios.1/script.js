// /* exercicio 1 */
// const testingScope = escopo => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(false);

// /* exercicio 2 */
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// oddsAndEvens.sort((a, b) => a - b);

// console.log(oddsAndEvens);

// /* exercicio 3 */
// const fact = (number) => {
//   let sum = 1;
//   for (let i = 1; i <= number; i += 1) {
//     sum *= i;
//   }
//   return sum;
// }
// console.log(fact(4));

// const fact = (number) => {
//   let sum = 1;
//   for (let i = number; i > 0; i -= 1) {
//     sum *= i;
//   }
//   return sum;
// }
// console.log(fact(4));

// /* exercicio 4 */
// const largestWord = (string) => {
//   let arrOfBiggest = string.split(' ');
//   let longWord = '';
//   for (let i = 0; i < arrOfBiggest.length; i += 1) {
//     if (arrOfBiggest[i].length > longWord.length) {
//       longWord = arrOfBiggest[i];
//     }
//   }
//   return longWord;
// }
// console.log(largestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

// const largestWord = (string) => string.split(' ').sort((a,b) => b.length - a.length)[0];
// console.log(largestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

/* exercicio 5 */
const getBtn = document.querySelector('#button-test');
const getSpan = document.querySelector('#count')
let count = 0;
const putCount = () => {
  getBtn.addEventListener('click', () => {
    getSpan.innerHTML = count += 1;
  });
}
putCount();