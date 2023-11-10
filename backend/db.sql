CREATE DATABASE djkjoias;

CREATE TABLE users (
    coduser serial,
    name varchar(30) not null,
    email varchar(40) not null,
    password varchar(255) not null,
    username varchar(25) not null,
    constraint pk_users primary key (coduser)
);