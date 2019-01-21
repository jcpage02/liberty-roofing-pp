require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const authCtrl = require("./auth_controller");
const jobCtrl = require("./job_controller");
const msgCtrl = require("./msg_controller");
const aptCtrl = require("./apt-controller");

const app = express();
const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET,
    ACCOUNT_SID,
    AUTH_TOKEN,
} = process.env;
const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);

app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);
app.use(cors());

app.post("/api/login", authCtrl.login);
app.post('/cust/login', authCtrl.custLogin)
app.post("/charge", async (req, res) => {
    const {amount, description, currency, token} = req.body
  try {
    let { status } = await stripe.charges.create({
      amount,
      currency,
      description,
      source: token
    });
    res.json({ status });
  } catch (err) {
    res.status(500).end();
  }
});

//////////// JOB //////////////
app.get("/api/active-jobs", jobCtrl.getActive);

////////// MESSAGES ///////////
app.get("/send-msg", msgCtrl.sendTwilioMessage);
app.get("/send-email", msgCtrl.sendNodeMailer);

//////// APPOINTMENT //////////
app.get("/api/apts", aptCtrl.getApts);
app.post("/api/apts", aptCtrl.createApt);
app.delete("/api/apts/:id", aptCtrl.deleteApt);

//////////// REP //////////////
app.get("/api/reps");
app.put("/api/reps");
app.post("/api/reps");
app.delete("/api/reps");

massive(CONNECTION_STRING)
  .then(connection => {
    app.set("db", connection);
    app.listen(SERVER_PORT, () =>
      console.log(`listening on port ${SERVER_PORT}`)
    );
  })
  .catch(err => {
    console.log(err);
  });
