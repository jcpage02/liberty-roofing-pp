create table job_old
(
    job_id serial primary key,
    job_price float(2),
    job_date date,
    job_address varchar(80),
    job_city varchar(30),
    job_state varchar(2),
    job_zip int,
    job_status varchar(10),
    job_ecd date,
    crew_id int,
    rep_id int,
    cust_id int
)