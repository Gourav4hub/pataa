create database pataa_ecommerce;

create table pataa_ecommerce.category(
    cate_id int AUTO_INCREMENT,
    cate_title varchar(100) NOT NULL UNIQUE,
    cate_description varchar(500),
    cate_status boolean default true,
    PRIMARY KEY(cate_id) 
);

create table pataa_ecommerce.product(
    product_id int AUTO_INCREMENT,
    product_title varchar(100) NOT NULL UNIQUE,
    product_description varchar(500),
    product_price float NOT NULL,
    product_image varchar(100),
    product_category int, 
    product_status boolean default true,
    FOREIGN KEY(product_category) REFERENCES pataa_ecommerce.category(cate_id),
    PRIMARY KEY(product_id) 
);