import bcrypt from "bcryptjs";

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    const userArray = await db.get_employee({ uesrname });
    const { rep_id, rep_username, rep_hash, is_admin } = userArray[0];
    if (!userArray[0]) {
      return res.status(200).send({ message: "Incorrect Username" });
    }
    const compare = bcrypt.compareSync(password, rep_hash);
    if (!compare) {
      return res.status(401).send({ message: "Incorrect Password" });
    }
    req.session.user = { id: rep_id, username: rep_username };
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
  }
};
