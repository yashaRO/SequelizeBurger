CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
  id int not null auto_increment primary key,
  burger_name varchar(20) not null,
  devoured boolean default false not null,
  date timestamp not null
)