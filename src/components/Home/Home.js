import React, { Component } from "react";
import "./Home.css";
import Scheduler from "./Scheduler/Scheduler";
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="home-header">
          <logo className="home-logo">LIBERTY ROOFING</logo>
          <div className="home-navbar">
            <ul className="home-ul">
              <Link to=''><li className="home-li">Residential Services</li></Link>
              <Link to=''><li className="home-li">Commercial Services</li></Link>
              <Link to=''><li className="home-li">Storm Damage</li></Link>
              <Link to=''><li className="home-li">About Us</li></Link>
              <Link to=''><li className="home-li">Contact Us</li></Link>
              <Link to='/employee/login'><li className="home-li">Login</li></Link>
            </ul>
          </div>
        </div>
        <Scheduler />
        <div className="home-body3">
          <div className="home-faq">FAQ</div>
          <div className='home-info'>
            <div className='home-reviews'>REVIEWS</div>
            <div className='home-story'>STORY</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
