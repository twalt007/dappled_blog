const mysql = require('mysql2');
const config = require('../config/db');

const pool = mysql.createPool(config);

const db = pool.promise();

module.exports = db;