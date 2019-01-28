const bcrypt = require('bcryptjs')

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get('db');
    const userArray = await db.rep.get_employee({ username });
    if (!userArray[0]) {
      return res.status(401).send({ message: "Incorrect Username" });
    }
    const { rep_id, rep_username, rep_hash, is_admin } = userArray[0];
    const compare = bcrypt.compareSync(password, rep_hash);
    if (!compare) {
      return res.status(401).send({ message: "Incorrect Password" });
    }
    req.session.user = { id: rep_id, username: rep_username, isAdmin: is_admin };
    res.status(200).send({
      message: "logged in",
      userData: req.session.user,
      loggedIn: true
    });
  },

  userData: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.status(401).send("Please log in.");
    }
  },

  custLogin: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get('db');
    const custArray = await db.cust.get_cust({ username });
    if (!custArray[0]) {
      return res.status(401).send({ message: "Incorrect Username" });
    }
    const {cust_id, cust_first, cust_hash, cust_username} = custArray[0]
    const compare = bcrypt.compareSync(password, cust_hash);
    if (!compare) {
      return res.status(401).send({ message: "Incorrect Password" });
    }
    req.session.user = { id: cust_id, username: cust_username };
    res.status(200).send({
      message: "logged in",
      userData: req.session.user,
      loggedIn: true
    });
  },

  
}