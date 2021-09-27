const fs = require('fs').promises;

const promise1 = new Promise((resolve, reject) => {
  try {
    const text = fs.writeFile('file1.txt', 'Finalmente')
    resolve(text);
    console.log('Escrito com sucesso!');
  } catch (error) {
    reject(error)
    console.error('Não foi possivel escrever no documento', error.message);
  }
});

const promise2 = new Promise((resolve, reject) => {
  try {
    const text = fs.writeFile('file2.txt', 'estou')
    resolve(text);
    console.log('Escrito com sucesso!');
  } catch (error) {
    reject(error)
    console.error('Não foi possivel escrever no documento', error.message);
  }
});

const promise3 = new Promise((resolve, reject) => {
  try {
    const text = fs.writeFile('file3.txt', 'usando')
    resolve(text);
    console.log('Escrito com sucesso!');
  } catch (error) {
    reject(error)
    console.error('Não foi possivel escrever no documento', error.message);
  }
});

const promise4 = new Promise((resolve, reject) => {
  try {
    const text = fs.writeFile('file4.txt', 'Promise.all')
    resolve(text);
    console.log('Escrito com sucesso!');
  } catch (error) {
    reject(error)
    console.error('Não foi possivel escrever no documento', error.message);
  }
});


const promise5 = new Promise((resolve, reject) => {
  try {
    const text = fs.writeFile('file5.txt', '!!!')
    resolve(text);
    console.log('Escrito com sucesso!');
  } catch (error) {
    reject(error)
    console.error('Não foi possivel escrever no documento', error.message);
  }
});

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
  fs.readFile('file4.txt'),
  fs.readFile('file5.txt')
])
  .then(value => {
    fs.writeFile('fileAll.txt', value.join(' '));
    console.log('Arquivo fileAll criado com sucesso!');
  })
  .catch((e) => console.error(e.message));