const { Animals, findAnimalByAge, getAnimal } = require('./exercise6_2');

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com o a idade', () => {
    test('Verifique o primeiro nome do animal no array retornado', () => {
      // expect.assertions(1);
      const animals = [{ name: 'Preguiça', age: 5, type: 'Cat' }];
      return expect(findAnimalByAge(5)).resolves.toEqual(animals);
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      // expect.assertions(1);
      return expect(findAnimalByAge(3)).rejects.toBe('Nenhum animal encontrado!');
    });
  });
});