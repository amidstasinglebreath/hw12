CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	consumed BOOLEAN DEFAULT false,
	vegan BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
