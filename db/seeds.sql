-- Specify database to use
USE burgers_db;

-- Insert a set of records.
INSERT INTO burgers (burger_name, devoured)
VALUES ('Chicken Avocado Burger', true);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Double Cheddar Bacon Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Mushroom Swiss Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Southwest Burger", false);