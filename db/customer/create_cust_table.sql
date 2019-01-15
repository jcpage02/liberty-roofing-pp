create table customer
(
    cust_id serial primary key,
    cust_first varchar(50),
    cust_last varchar(50),
    cust_address varchar(80),
    cust_city varchar(30),
    cust_state varchar(2),
    cust_zip int,
    cust_phone varchar(10),
    cust_email varchar(40)
)