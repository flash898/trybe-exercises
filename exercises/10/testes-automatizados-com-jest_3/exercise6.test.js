const fetch = require('./exercise6');

describe('Testing function', () => {
  const apiURL = jest
    .spyOn(fetch, "dogPictures");
    afterEach(apiURL.mockReset);

  it('if resolve be true', async () => {
    apiURL.mockResolvedValue('request sucess');

    expect.assertions(3);
    expect(apiURL()).resolves.toBe('request sucess');
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
  });

  it('if reject be true', () => {
    apiURL.mockRejectedValue('request failed');

    expect.assertions(3);
    expect(apiURL()).rejects.toBe('request failed');
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
});

// 6- Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.