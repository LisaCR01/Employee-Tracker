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

-- Computer creates the manager table.
CREATE TABLE manager (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  leader VARCHAR(30) NOT NULL
);

-- computer creates table of roles.
CREATE TABLE roles (
  role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  job VARCHAR(30) NOT NULL,
  -- salary can be upto 8 digits in total including the two digits after the decimal.
  salary DECIMAL(8,2),
  -- computer links the department collumn value to the id of the department table.
  department INT,
  FOREIGN KEY (department)
  REFERENCES department(dept_id)
  );

-- computer creates table for employee's names
CREATE TABLE employee_names (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
   -- computer links the manager's name to the manager's table through the foreign key.
  manager INT,
  FOREIGN KEY (manager)
  REFERENCES manager(id),
  -- computer links the role collumn value to the id of the role table.
  roles INT,
  FOREIGN KEY (roles)
  REFERENCES roles(role_id)
);

