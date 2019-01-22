update appointment
set cust_first = ${first},
cust_last = ${last},
cust_address = ${address},
cust_city = ${city},
cust_state = ${state},
cust_phone = ${phone},
cust_email = ${email},
apt_date = ${date},
apt_type = ${type}

where apt_id = ${id}





