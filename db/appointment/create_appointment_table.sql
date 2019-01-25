create table appointment
(
    apt_id serial primary key,
    cust_first text,
    cust_last text,
    cust_address text,
    cust_city text,
    cust_state varchar(2),
    cust_phone varchar(10),
    cust_email text,
    cust_img text,
    apt_date date,
    apt_type text
);

insert into appointment (
    cust_first,
    cust_last,
    cust_address,
    cust_city,
    cust_state,
    cust_phone,
    cust_email,
    cust_img,
    apt_date,
    apt_type
)
values (
    'Laura',
    'Blanch',
    '238 E 2525 S',
    'Clearfield',
    'UT',
    '8018272783',
    'jamescpage@outlook.com',
    'data:image/jpeg;base64,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',
    '02/20/2019',
    'roof repair'
);

select * from appointment
