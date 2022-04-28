let mysql = require('mysql');
const util = require('util');
let config = {
    host    : '34.125.225.24',
    user    : 'root',
    password: 'secret',
    database: 'proyecto2',
    port: 33061
  };

let connection = mysql.createConnection(config);
module.exports = connection;