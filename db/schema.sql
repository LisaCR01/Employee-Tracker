-- Computer creates the database employees.
-- Drop clears the memory if the database employees already exists.
DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

-- Computer creates table of the departments.
-- There are two collumns in the table
-- dept-id uniquely identifies the row and is automatically given and increments in integer steps.
-- dept holds the description of the departments and can be upto 30 characters but not empty.
CREATE TABLE department (
  dept_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dept VARCHAR(30) NOT NULL
);

