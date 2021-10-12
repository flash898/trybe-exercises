const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'senha123',
  database: 'rest_exerccios'
});

module.exports = connection;