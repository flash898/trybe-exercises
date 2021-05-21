const service = require('./exercise1');

describe('Testing new implementations on function of the first exercise', () => {
  it('for multiply with three parameters', () => {
    service.random = jest
      .fn()
      .mockImplementationOnce((a, b, c) => a * b * c);
      
      expect(service.random(1 ,2 ,3)).toBe(6);
      expect(service.random).toHaveBeenCalled();
      expect(service.random).toHaveBeenCalledWith(1, 2, 3);
      expect(service.random).toHaveBeenCalledTimes(1);

      service.random
      .mockReset()
      .mockImplementationOnce((a) => a * 2);
      expect(service.random(4)).toBe(8);
      expect(service.random).toHaveBeenCalledWith(4);
      expect(service.random).toHaveBeenCalledTimes(1);
  })
});

// 3- Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.