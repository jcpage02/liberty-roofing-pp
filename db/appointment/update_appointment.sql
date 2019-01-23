update appointment
set cust_first = ${cust_first},
cust_last = ${cust_last},
cust_address = ${cust_address},
cust_city = ${cust_city},
cust_state = ${cust_state},
cust_phone = ${cust_phone},
cust_email = ${cust_email},
apt_date = ${apt_date},
apt_type = ${apt_type}

where apt_id = ${id}