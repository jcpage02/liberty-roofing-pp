require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const bcrypt = require('bcryptjs')
const cors = require('cors')

const authCtrl = require('./auth_controller')
const jobCtrl = require('./job_controller')
const msgCtrl = require('./msg_controller')
const aptCtrl = require('./apt-controller')


const app = express()
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, ACCOUNT_SID, AUTH_TOKEN} = process.env
const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(cors())

app.post('/api/login', authCtrl.login)

// app.get('/api/reviews')

//////////// JOB //////////////
app.get('/api/active-jobs', jobCtrl.getActive)
app.get('/api/customers')
app.get('/api/crews')

app.put('/api/jobs')

app.post('/api/jobs', jobCtrl.createJob)

app.delete('/api/jobs')

////////// MESSAGES ///////////
app.get('/send-msg', msgCtrl.sendTwilioMessage)
app.get('/send-email', msgCtrl.sendNodeMailer)

//////// APPOINTMENT //////////
app.get('/api/apts', aptCtrl.getApts)
app.get('/api/reps')
app.get('/api/repSkills')

app.put('/api/apts')

app.post('/api/apts') 

app.delete('/api/apts')

//////////// REP //////////////
app.get('/api/reps')
app.get('/api/reps_skills')

app.put('/api/reps')

app.post('/api/reps')

app.delete('/api/reps')


//////////// GOAL //////////////
app.get('/api/jobs')
app.get('/api/goals')

app.put('/api/goals')

app.post('/api/goals')

app.delete('/api/goals')



massive(CONNECTION_STRING)
	.then(connection => {
		app.set('db', connection)
        app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
})
.catch((err) => {console.log(err)})