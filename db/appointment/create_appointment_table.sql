create table appointment
(
    apt_id serial primary key,
    cust_id int references customer (cust_id),
    apt_date date,
    apt_type text
)
