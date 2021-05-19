const { encode, decode } = require('./partIIOne');

describe('Encode e decode', () => {
  it(('Encode é uma função'), () => {
    expect(typeof encode).toEqual('function');
  })
  it(('Decode é uma função'), () => {
    expect(typeof decode).toEqual('function');
  })
  it(('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5'), () => {
    expect(encode('abc')).toEqual('1bc');
    expect(encode('ebc')).toEqual('2bc');
    expect(encode('ibc')).toEqual('3bc');
    expect(encode('obc')).toEqual('4bc');
    expect(encode('ubc')).toEqual('5bc');
  });
  it(('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u'), () => {
    expect(decode('187')).toEqual('a87');
    expect(decode('287')).toEqual('e87');
    expect(decode('387')).toEqual('i87');
    expect(decode('487')).toEqual('o87');
    expect(decode('587')).toEqual('u87');
  });
})
