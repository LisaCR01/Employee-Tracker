const { prompt } = require("inquirer");
const { printTable } = require('console-table-printer')
var inquirer = require('inquirer')
const printMessage = require('print-message');
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();
let deptCurrent = [];
let keysDept = [];

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
        case "Everyone": db.query('SELECT * FROM employee_all', function (err, results) {
            console.log(" ");
            printTable(results);});; 
        return initialQuestions();
        case "All departments": db.query('SELECT * FROM department', function (err, results) {
            console.log(" ");
            printTable(results);}); 
        return initialQuestions();
        case "All managers": db.query('SELECT * FROM manager', function (err, results) {
            console.log(" ");
            printTable(results);});
        return initialQuestions();
        // Used the view all role so that department name is populated.
        case "All roles": db.query('SELECT * FROM roles_all', function (err, results) {
            console.log(" ");
            printTable(results);});
        return initialQuestions();
        case "Add a department": addDept(); break;
        case "Add a role": addRole(); break;
        case "Add an employee": addEmployee(); break;
        case "Update an Employee": updateEmployee(); break;
        default: allDone();
}})};

function addDept(){
    prompt([{
        type: "input",
        name: "addD",
        message: "What would you like to call the new department?"
        }])
        .then
        (res => { console.log(res.addD);
        let sql = `INSERT INTO department(dept)
        VALUES('${res.addD}')`;
        db.query(sql,
        function (err, results) {
        console.log(results);
        initialQuestions();
            })
        })
};
function addRole(){
    // Computer pulls from the database the possible departments.
    db.query('SELECT * FROM department', function (err, results) {
    for (let i = 0; i < results.length; i++) {
        deptCurrent[i] = results[i].dept;
        keysDept[i] = results[i].dept_id;
        }});
    prompt([
        {
        type: "input",
        name: "addR",
        message: "What would you like to call the new role?"
        },
        
        {
        type: "input",
        name: "salary",
        message: "What is the role's salary?"
        },

        {
        type: "list",
        name: "deptChoice",
        message: "What is the role's department?", 
        choices: deptCurrent
        }])
        .then (res => {
            let num = keysDept[deptCurrent.indexOf(res.deptChoice)];
            let sql = `INSERT INTO roles(job,salary, department)
            VALUES('${res.addR}',${res.salary},${num})`;
            console.log(sql);
        db.query(sql,
            function (err, results) {
                  console.log(results);
                  initialQuestions();
                })
            })
        };
function addEmployee(){
    initialQuestions();
};
function updateEmployee(){
    initialQuestions();
};

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

