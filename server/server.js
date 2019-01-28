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
const repCtrl = require('./rep_controller')

const app = express();
const {
  SERVER_PORT,
  CONNECTION_STRING,
  SESSION_SECRET,
  ACCOUNT_SID,
  AUTH_TOKEN,
  REACT_APP_STRIPE_PUBLISHABLE,
  REACT_APP_STRIPE_SECRET,
  REACT_APP_HOST_HOME,
  REACT_APP_HOST_LOGIN
} = process.env;
const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);
const stripe = require("stripe")(REACT_APP_STRIPE_SECRET);

app.use( express.static( `${__dirname}/../build` ) )

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
app.post("/cust/login", authCtrl.custLogin);
app.get("/emp/logout", (req, res) => {
  req.session.destroy();
  res.redirect(REACT_APP_HOST_LOGIN);
});
app.get("/cust/logout", (req, res) => {
  req.session.destroy();
  res.redirect(REACT_APP_HOST_HOME);
});
app.post("/api/payment", async (req, res) => {
  const { amount, description, currency, token } = req.body;
  const charge = await stripe.charges.create(
    {
      amount,
      currency,
      description,
      source: token.id
    },
    (err, charge) => {
      if (err) return res.sendStatus(500);
      else return res.sendStatus(200);
    }
  );
});

//////////// JOB //////////////
app.get("/active-jobs", jobCtrl.getActive);

////////// MESSAGES ///////////
app.get("/send-msg", msgCtrl.sendTwilioMessage);
app.get("/send-email", msgCtrl.sendNodeMailer);

//////// APPOINTMENT //////////
app.get("/api/apts", aptCtrl.getApts);
app.post("/api/apts", aptCtrl.createApt);
app.delete("/api/apts/:id", aptCtrl.deleteApt);
app.put("/api/apts/:id", aptCtrl.updateApt);

//////////// REP //////////////
app.get('/reps', repCtrl.getReps)

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
