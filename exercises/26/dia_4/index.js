const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const e = require('express');

const app = express();
app.use(bodyParser.json());

async function readSimpsons(){
  try {
    const simpsons = await fs.readFile('simpsons.json', 'utf-8');
    console.log(simpsons);
    return JSON.parse(simpsons);
  } catch (error) {
    return error.message;
  }
}

function writeSimpsons(newChar) {
  const newSimpson = fs.writeFile('simpsons.json', JSON.stringify(newChar));
  return newSimpson;
}

app.get('/ping', function(_req, res) {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', function(req, res) {
  const { username } = req.body; 
  res.status(201).json({ message: `Hello, ${username}!`})
});

app.post('/greetings', function(req, res){
  const { username, age } = req.body;
  if(age > 17) return res.status(200).json({ message: `Hello, ${username}!` });
  res.status(401).json({ message: "Unauthorized"});
});

app.put('/users/:name/:age', function(req, res){
  const { name, age } = req.body;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade`});
});


app.get('/simpsons', async function(_req, res){
  const simpsonsArr = await readSimpsons();

  res.status(200).json(simpsonsArr);
});

app.get('/simpsons/:id', async function(req, res){
  const simpsonsArr = await readSimpsons();
  const findSimpson = simpsonsArr.find(({ id }) => id === req.params.id);

  if(!findSimpson) res.status(404).json({ message: "Simpson not found" });
  res.status(200).json(findSimpson);
});

app.post('/simpsons', async function(req, res){
  const { id, name } = req.body;
  const simpsonsArr = await readSimpsons();
  const findSimpson = simpsonsArr.map(({ id }) => id).includes(id);
  if(findSimpson) return res.status(409).json({ message: 'id already exists' });
  simpsonsArr.push({ id, name });

  await writeSimpsons(simpsonsArr);
  res.status(204).end();
});

app.listen(3002, () => {
  console.log('Aplicação na porta 3002');
});