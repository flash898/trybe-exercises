const { users, findUserById, getUserName } = require('./exercise2');

describe('Testing first function', () => {
  it('Usuário encontrado', () => {
    expect.assertions(1);
    return getUserName(4).then((data)=> expect(data).toEqual('Mark'));
  });
  it('Usuário not found', () => {
    expect.assertions(1);
    return getUserName(1).catch((error) => expect(error).toEqual({ error: `User with 1 not found.` }));
  });
});


// 2- Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

describe('Testing second function', () => {
  it('User found', async () => {
    expect.assertions(1);
    const data = await getUserName(4);
    expect(data).toEqual('Mark');
  });
  it('User not found', async () => {
    expect.assertions(1);
    try {
     await getUserName(1);
    } catch (error) {
      expect(error).toEqual({ error: `User with 1 not found.` });
    }
  });
});
// 3- Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.