create database pataa_ecommerce;

create table pataa_ecommerce.category(
    cate_id int AUTO_INCREMENT,
    cate_title varchar(100) NOT NULL UNIQUE,
    cate_description varchar(500),
    cate_status boolean default true,
    PRIMARY KEY(cate_id) 
);