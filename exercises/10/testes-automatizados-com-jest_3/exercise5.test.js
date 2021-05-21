const service = require('./exercise4');

describe('Testing "transformToUppercase"', () => {
  it('to tranforms in lowercase', () => {
    const toLower = jest
      .spyOn(service, "transformToUppercase")
      .mockImplementation((str) => str.toLowerCase());

      expect.assertions(5);
      expect(toLower('ANA')).toBe('ana');
      expect(toLower).toHaveBeenCalled();
      expect(toLower).toHaveBeenCalledWith('ANA');
      expect(toLower).toHaveBeenCalledTimes(1);

      service.transformToUppercase
        .mockRestore();
    
      expect(service.transformToUppercase('ana')).toBe('ANA');
  })
})
// 5- Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.