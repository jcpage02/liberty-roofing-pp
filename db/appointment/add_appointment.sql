insert into appointment
(
    cust_first,   
    cust_last,   
    cust_address,  
    cust_city,   
    cust_state,   
    cust_phone,   
    cust_email,  
    apt_date,   
    apt_type
)      
values 
(
    ${firstName},
    ${lastName},
    ${address},
    ${city},
    ${state},
    ${phone},
    ${email},
    ${date},
    ${type}
)

returning *