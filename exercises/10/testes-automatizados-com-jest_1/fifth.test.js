const { obj1 , obj2, obj3 } = require('./fifth');

describe('Compara os objetos', () => {
  it(('obj1 é igual obj2'), () => {
    expect(obj1).toEqual(obj2);
  });
  it(('obj2 não é igual obj3'), () => {
    expect(obj2).not.toEqual(obj3);
  });
  it(('obj3 não é igual obj1'), () => {
    expect(obj3).not.toEqual(obj1);
  })
})