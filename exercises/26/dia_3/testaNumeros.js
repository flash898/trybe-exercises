function testaNumeros(num) {
  if(typeof num != "number") {
    return "o valor deve ser um número";
  } else {
    if(num > 0) return 'positivo';
    if(num < 0) return 'negativo';
    if(num === 0) return 'neutro';
  }
}

module.exports = testaNumeros;