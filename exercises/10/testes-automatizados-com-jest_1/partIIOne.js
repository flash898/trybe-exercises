// Funções para o encode
function checkVowel(vowel) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let number = [1, 2, 3, 4, 5];
  for (let i = 0; i < vowels.length; i += 1) {
    if (vowel === vowels[i]) {
      vowel = number[i];
    }
  }
  return vowel;
}

function encode(string) {
  let arrNew = string.split('');
  for (let letter = 0; letter < arrNew.length; letter += 1) {
    arrNew[letter] = checkVowel(arrNew[letter]);
  }
  arrNew = arrNew.join('');
  return arrNew;
}

// Funções para o decode
function checkDecode(number) {
  let numbers = ['1', '2', '3', '4', '5'];
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < numbers.length; i += 1) {
    if (number === numbers[i]) {
      number = vowel[i];
    }
  }
  return number;
}

function decode(string) {
  let arrNew = string.split('');
  for (let letter = 0; letter < arrNew.length; letter += 1) {
    arrNew[letter] = checkDecode(arrNew[letter]);
  }
  arrNew = arrNew.join('');
  return arrNew;
}

module.exports = {
  checkVowel,
  encode,
  checkDecode,
  decode
}