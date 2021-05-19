const myFizzBuzz = require('./fourth');

describe('Função myRemoveWothoutCopy', () => {
  it(('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado'), () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });
  it(('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado'), () => {
    expect(myFizzBuzz(3)).toMatch('fizz');
  });
  it(('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado'), () => {
    expect(myFizzBuzz(5)).toMatch('buzz');
  });
  it(('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado'), () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  it(('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado'), () => {
    expect(myFizzBuzz('2')).toBeFalsy();
  });
});
