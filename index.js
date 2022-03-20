const { prompt } = require("inquirer");
const { printTable } = require('console-table-printer')
var inquirer = require('inquirer')
const printMessage = require('print-message');
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const dbOptions = {
  host: 'localhost',
  // MySQL username,
  user: 'root',
  database: 'employees'
}
// Computer connect to database.
const db = mysql.createConnection(dbOptions);

// Computer sets up host webpage.
app.listen(PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`);
    });