const service  = require('./exercise1');

describe('Testing random function', () => {
  it('with new implementation', () => {
    service.random = jest
    .fn()
    .mockReturnValue(10)
    .mockImplementationOnce((a, b) => a / b);

    expect(service.random(15,3)).toBe(5);
    expect(service.random).toHaveBeenCalledWith(15, 3);
    expect(service.random).toHaveBeenCalledTimes(1);
    expect(service.random).toHaveBeenCalled();

    expect(service.random()).toBe(10);
    expect(service.random).toHaveBeenCalledWith();
    expect(service.random).toHaveBeenCalledTimes(2);
  });
});

// 2- Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.