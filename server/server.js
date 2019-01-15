require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const bcrypt = require('bcryptjs')
const authCtrl = require('./auth_controller')


const app = express()
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.post('/api/login', authCtrl.login)

// app.get('/api/reviews')

//////////// JOB //////////////
app.get('/api/jobs')
app.get('/api/customers')
app.get('/api/crews')

app.put('/api/jobs')

app.post('/api/jobs')

app.delete('/api/jobs')

//////// APPOINTMENT //////////
app.get('/api/apts')
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
        app.listen(SERVER_PORT, () => console.log(`listening on port SERVER_PORT`))
})
.catch((err) => {console.log(err)})