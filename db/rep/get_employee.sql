select rep_id, rep_username, rep_hash, is_admin
from rep
where rep_username = ${username}
