/* create database burgers_db */
CREATE database burgers_db;

USE burgers_db;

/* insert burgers TABLE */
CREATE TABLE burgers(
id INT AUTO_INCREMENT PRIMARY KEY, 
burger_name VARCHAR (50) NOT NULL,
devoured BOOLEAN DEFAULT false
)
