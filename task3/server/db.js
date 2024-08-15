const mysql = require('mysql2');
require('dotenv').config();

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',  // Hostname or IP address
    port: 3306, // Replace with your MySQL host
    user: 'root',      // Replace with your MySQL user
    password: process.env.DB_PASSWORD,      // Replace with your MySQL password
    database: 'raj' // Replace with your MySQL database name
  });

  // Connect to the database
connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
      return;
    }
    console.log('Connected to the database as ID ' + connection.threadId);
  });

  module.exports = connection;
  