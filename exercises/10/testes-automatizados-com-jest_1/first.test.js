const sum = require('./first');

it('Primeira soma', () => {
  expect(sum(4,5)).toBe(9);
  expect(sum(0,0)).toBe(0);
});

