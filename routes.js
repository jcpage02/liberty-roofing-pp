import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home/Home'
import AdminDash from './components/AdminDash/AdminDash'
import Login from './components/Login/Login'
import Job from './components/Job/Job'
import Rep from './components/Rep/Rep'
import Appointment from './components/Appointment/Appoinment'
import Goal from './components/Goal/Goal'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/employee/login' component={Login} />
        {/* <Route path='/rep/dash' component={RepDash} /> */}
        <Route path='/admin/dash' component={AdminDash} />
        <Route path='/admin/jobs' component={Job} />
        <Route path='/admin/reps' component={Rep} />
        <Route path='/admin/appointments' component={Appointment} />
        <Route path='/admin/goals' component={Goal} />
    </Switch>
)