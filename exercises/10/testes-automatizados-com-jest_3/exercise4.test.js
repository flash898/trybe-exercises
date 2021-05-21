const service = require('./exercise4');
jest.mock('./exercise4');

describe('Testing "transformToUppercase"', () => {
  it('to transform in lowercase', () => {
    service.transformToUppercase = jest
      .fn()
      .mockImplementation((str) => str.toLowerCase());

      expect.assertions(4);
      expect(service.transformToUppercase('ANA')).toBe('ana');
      expect(service.transformToUppercase).toHaveBeenCalled();
      expect(service.transformToUppercase).toHaveBeenCalledWith('ANA');
      expect(service.transformToUppercase).toHaveBeenCalledTimes(1);
  });
});

describe('Testing "getTheFirstLetter"', () => {
  it('to return the latest letter', () => {
    service.getTheFirstLetter = jest
      .fn()
      .mockImplementation((str) => str.charAt(str.length-1));

      expect.assertions(4);
      expect(service.getTheFirstLetter('alfredo')).toBe('o');
      expect(service.getTheFirstLetter).toHaveBeenCalled();
      expect(service.getTheFirstLetter).toHaveBeenCalledWith('alfredo');
      expect(service.getTheFirstLetter).toHaveBeenCalledTimes(1);
  });
});

describe('Testing "concatStrings"', () => {
  it('to receive three parameters and concat them', () => {
    service.concatStrings = jest
      .fn()
      .mockImplementation((str1, str2, str3) => str1.concat(str2, str3))
      
      expect.assertions(4);
      expect(service.concatStrings('Alf, ', 'o ', 'ETeimoso')).toBe('Alf, o ETeimoso');
      expect(service.concatStrings).toHaveBeenCalled();
      expect(service.concatStrings).toHaveBeenCalledWith('Alf, ','o ', 'ETeimoso');
      expect(service.concatStrings).toHaveBeenCalledTimes(1)
  });
});

// 4- Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.