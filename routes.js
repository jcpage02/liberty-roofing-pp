import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import AdminDash from './components/AdminDash/AdminDash'
import Login from './components/Login/Login'
import Job from './components/Job/Job'
import Rep from './components/Rep/Rep'
import Appointment from './components/Appointment/Appoinment'

export default (
    <Switch>
        <Route component={Header}/>
        <Route exact path='/' component={Home} />
        <Route path='/employee/login' component={Login} />
        <Route path='/admin/dash' component={AdminDash} />
        <Route path='/admin/jobs' component={Job} />
        <Route path='/admin/reps' component={Rep} />
        <Route path='/admin/appointments' component={Appointment} />
    </Switch>
)