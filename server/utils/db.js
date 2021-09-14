const mysql = require('mysql2');

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'test1234',
  database: 'healthcaredb',
});

module.exports = db;
