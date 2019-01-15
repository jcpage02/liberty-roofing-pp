create table review
(
    review_id serial primary key,
    cust_id int,
    review_body varchar(180)
)