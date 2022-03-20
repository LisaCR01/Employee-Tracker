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

init();

// When the command line is run computer asks initialQuestions
function initialQuestions() {
    prompt([{
        type:"list",
        name: "seeWho",
        message: "Which employee group would you like to see?",
        choices: [
        "Everyone",
        "All departments",
        "All managers",
        "All roles",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an Employee",
        "All done"
        
    ]}])
    .then(res => {
        let choice = res.seeWho;
        switch (choice) {
        case "Everyone": console.log("that's everyone"); 
        return initialQuestions();
        case "All departments": console.log("view all departments")
        return initialQuestions();
        case "All managers": console.log("view all managers")
        return initialQuestions();
        case "All roles": console.log("view all roles")
        return initialQuestions();
        case "Add a department": console.log("add a department")
        return initialQuestions();
        case "Add a role": console.log("add a role")
        return initialQuestions();
        case "Add an employee": console.log("add an employee")
        return initialQuestions();
        default: allDone();
}})};

// When the user has finished selecting reviewing their company it will exit initialQuestions.
function allDone() {
    console.log("All done!");
    process.exit();
  }

// init initialises setup.
function init() {
    printMessage(["Welcome!", "Let\'s organise the company."]);
    initialQuestions();
  };