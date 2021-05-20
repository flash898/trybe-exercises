const uppercase = require('./exercise1');


describe('Testa se uppercase é uma função', () => {
  it('Uppercase é uma função', (done) => {
    uppercase('xablau', (str) => {
      expect(str).toBe('XABLAU');
      done();
    });
  });
});
