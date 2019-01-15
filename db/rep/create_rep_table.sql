create table rep
(
    rep_id serial primary key,
    rep_first varchar(50),
    rep_last varchar(50),
    rep_address varchar(80),
    rep_city varchar(30),
    rep_state varchar(2),
    rep_zip int,
    rep_ytd_total float(2),
    rep_skill_roofs boolean,
    rep_skill_roof_repair boolean,
    rep_skill_siding boolean,
    rep_skill_windows boolean,
    rep_skill_gutters boolean,
    rep_skill_commercial_roofs boolean
)