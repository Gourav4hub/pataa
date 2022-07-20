create database pataa;

create table pataa.employee(
    empid int AUTO_INCREMENT,
    emp_name varchar(100) NOT NULL,
    emp_email varchar(100) NOT NULL UNIQUE,
    emp_salary float NOT NULL,
    PRIMARY KEY (empid)
);

insert into pataa.employee(emp_name,emp_email,emp_salary)
    value('Vikas','vikas@gmail.com',25000);
insert into pataa.employee(emp_name,emp_email,emp_salary)
    value('Gopal','gopal@gmail.com',21000);
insert into pataa.employee(emp_name,emp_email,emp_salary)
    value('Meena','meena@gmail.com',23000);