CREATE DATABASE djkjoias;

\c djkjoias

CREATE TABLE users (
    cpf varchar(15) not null,
    name varchar(30) not null,
    email varchar(40) not null,
    password varchar(255) not null,
    username varchar(25) not null,
    position integer not null,
    constraint pk_users primary key (cpf)
);