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
