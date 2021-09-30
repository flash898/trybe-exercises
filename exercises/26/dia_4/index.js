const express = require('express');

const app = express();

app.get('/ping', function(_req, res) {
  res.status(200).json({ message: 'pong' });
});

app.listen(3002, () => {
  console.log('Aplicação na porta 3002');
});