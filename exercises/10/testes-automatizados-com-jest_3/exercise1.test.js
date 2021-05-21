const service  = require('./exercise1');

describe('Test random function', () => {
  it('to mock and default return 10', () => {
    service.random = jest.fn().mockReturnValue(10);

  
    expect(service.random()).toBe(10);
    expect(service.random).toHaveBeenCalled();
    expect(service.random).toHaveBeenCalledTimes(1);
  });
});

// 1- Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

