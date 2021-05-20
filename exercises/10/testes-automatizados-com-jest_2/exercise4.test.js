const getRepos = require('./exercise4');

describe('Function to check repositories', () => {
  it('Get a list of repos', () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    return getRepos(url).then((response) => {
      expect(response).toContain('sd-01-week4-5-project-todo-list');
      expect(response).toContain('sd-01-week4-5-project-meme-generator');
    })
  });
});
