CREATE DATABASE djkjoias;

\c djkjoias

set datestyle to [dmy];

CREATE TABLE employee IF NOT EXISTS(
    cpf varchar(15) NOT NULL,
    name varchar(30) NOT NULL,
    email varchar(40) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
    username varchar(25) NOT NULL,
    position integer NOT NULL,
    CONSTRAINT pk_employee PRIMARY KEY (cpf)
);

CREATE TABLE client IF NOT EXISTS (
    cpf varchar(15) NOT NULL,
    name varchar(30) NOT NULL,
    phone varchar(15) NOT NULL,
    CONSTRAINT pk_client PRIMARY KEY (cpf)
);

CREATE TABLE product IF NOT EXISTS (
    id serial NOT NULL,
    model varchar(30) NOT NULL,
    weight numeric NOT NULL
    entered date NOT NULL
    left date
    CONSTRAINT pk_product PRIMARY KEY ()
);

CREATE TABLE productMovement IF NOT EXISTS (
    id serial NOT NULL,
    value numeric NOT NULL,
    desc text,
    method integer NOT NULL,
    cpf varchar(15) NOT NULL,
    CONSTRAINT pk_productMovement PRIMARY KEY (id),
    CONSTRAINT fk_productMovement_employee FOREIGN KEY (cpf) REFERENCES employee(cpf)
);


CREATE TABLE sold IF NOT EXISTS (
    mid serial NOT NULL,
    pid serial NOT NULL,
    CONSTRAINT pk_sold PRIMARY KEY (mid,pid),
    CONSTRAINT fk_sold_movement FOREIGN KEY mid REFERENCES productMovement(id),
    CONSTRAINT fk_sold_product FOREIGN KEY pid REFERENCES product(id)
    
);

CREATE TABLE service IF NOT EXISTS (
    id serial NOT NULL,
    status integer NOT NULL,
    desc text,
    budget numeric NOT NULL,
    entered date NOT NULL,
    promissed date,
    left date,
    cpf varchar(15) NOT NULL,
    CONSTRAINT pk_service PRIMARY KEY (id),
    CONSTRAINT fk_service_client FOREIGN KEY (cpf) REFERENCES client(cpf)
);

CREATE TABLE serviceMovement IF NOT EXISTS (
    id serial NOT NULL,
    value numeric NOT NULL,
    desc text,
    method integer NOT NULL,
    sid serial NOT NULL,
    cpf varchar(15) NOT NULL,
    CONSTRAINT pk_serviceMovement PRIMARY KEY (id),
    CONSTRAINT fk_serviceMovement_service FOREIGN KEY (sid) REFERENCES service(id),
    CONSTRAINT fk_serviceMovement_employee FOREIGN KEY(cpf) REFERENCES employee(cpf)
);

INSERT INTO employee(cpf, name, email, password, username, position) VALUES ('60020030044', 'Mister Placeholder', 'mrplaceholder@gmail.com', 'fakepass', 'mrplaceholder', '0');

INSERT INTO client(cpf, name, phone) VALUES ('10020030011', 'Cliente 1', '5549900100200');
INSERT INTO client(cpf, name, phone) VALUES ('50060070011', 'Cliente 2', '5549900500600');

INSERT INTO product(model, weight, entered) VALUES ('model 1', 150.50, '02-01-2002');
INSERT INTO product(model, weight, entered) VALUES ('model 2', 300.00, '05-03-2010');

INSERT INTO service(status, desc, budget, entered, cpf) VALUES (1, 'placeholder service 1', 130.35, '05-04-2008', '10020030011');
INSERT INTO service(status, desc, budget, entered, cpf) VALUES (2, 'placeholder service 2', 13.00, '25-04-2008', '50060070011');

INSERT INTO serviceMovement(value, desc, method, sid, cpf) VALUES (120.30, "service movement 1", 1, 1, '60020030044');
INSERT INTO serviceMovement(value, desc, method, sid, cpf) VALUES (1200.00, "service movement 2", 2, 2, '60020030044');

INSERT INTO productMovement(value, desc, method, cpf) VALUES (30.20, 'product movement 1', 1, '60020030044');

INSERT INTO sold(mid, pid) VALUES (1, 1);
INSERT INTO sold(mid, pid) VALUES (2, 1);
INSERT INTO sold(mid, pid) VALUES (2, 2);
