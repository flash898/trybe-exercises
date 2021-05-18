const sum = require('./first');

describe('sum', () => {
  it('Primeira soma', () => {
    expect(sum(4,5)).toBe(9);
    expect(sum(0,0)).toBe(0);
    expect(() => {
      sum(4, '5');
    }).toThrow();
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  });
});
