insert into job (
    job_price,
    job_date,
    job_address,
    job_city,
    job_state,
    job_zip,
    job_status,
    job_ecd,
    crew_id,
    rep_id,
    cust_id
)
values (
    ${price},
    ${date},
    ${address},
    ${city},
    ${state},
    ${zip},
    ${status},
    ${ecd},
    ${crewId},
    ${repId},
    ${custId}
)