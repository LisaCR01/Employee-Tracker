INSERT INTO department (dept)
VALUES ("Shoes"),
       ("Sandals"),
       ("Boots"),
       ("Slippers");


INSERT INTO manager (leader)
VALUES ("Tom"),
       ("Alice"),
       ("Matt"),
       ("Sammy");

INSERT INTO roles (job,salary, department)
VALUES ("shoe fitter",300,1),
       ("slipper tester",250,4),
       ("shoe seller",230,1),
       ("boot polisher",320,3),
       ("sandal buckle fixer",220,2);

INSERT INTO employee_names (first_name,last_name,roles,manager)
VALUES ("Riley","Mathews",1,4),
       ("Walter","Parmer", 2,3),
       ("Ellie","Grant",3,2),
       ("Cassie","Kennedy", 2,1);