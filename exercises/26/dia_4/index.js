const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', function(_req, res) {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', function(req, res) {
  const { username } = req.body; 
  res.status(201).json({ message: `Hello, ${username}!`})
});

app.listen(3002, () => {
  console.log('Aplicação na porta 3002');
});