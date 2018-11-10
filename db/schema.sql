CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers
(
id INT AUTO_INCREMENT NOT NULL,
burger_name varchar(255) NOT NULL,
devoured boolean NOT NULL default false,
createdAt TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);