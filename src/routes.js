import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home/Home'
import AdminDash from './components/AdminDash/AdminDash'
import EmpLogin from './components/Login/EmpLogin'
import Job from './components/Job/Job'
import Rep from './components/Rep/Rep'
import Appointment from './components/Appointment/Appoinment'
import Goal from './components/Goal/Goal'
import CustDash from './components/CustDash/CustDash'
import CustLogin from './components/Login/CustLogin'
import Calendar from './components/Home/Scheduler/Calendar'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/customer/login' component={CustLogin} />
        <Route path='/employee/login' component={EmpLogin} />
        <Route path='/customer/dash' component={CustDash} />
        <Route path='/admin/dash' component={AdminDash} />
        <Route path='/admin/jobs' component={Job} />
        <Route path='/admin/reps' component={Rep} />
        <Route path='/admin/appointments' component={Appointment} />
        <Route path='/admin/goals' component={Goal} />
        <Route path='/calendar' component={Calendar} />
    </Switch>
)