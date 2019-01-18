select j.job_id as id, j.job_price as price, j.job_date as date_sold, j.job_address as address,
        j.job_city as city, j.job_state as state, j.job_zip as zip, 
        j.job_status as status, j.job_ecd as ecd, 
        
        concat(c.cust_first, ' ', c.cust_last) as customer_name, 
        c.cust_phone as phone, c.cust_email as email,
        
        cw.crew_name, cw.crew_head, cw.crew_phone
from job_old j
join customer c on c.cust_id = j.cust_id
join crew cw on cw.crew_id = j.crew_id
where job_status not in ('Completed');