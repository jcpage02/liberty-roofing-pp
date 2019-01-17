import React, { Component } from "react";
import "./Home.scss";
import Scheduler from "./Scheduler/Scheduler";
import Header from "../Header/Header";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header home='home'/>
        <Scheduler />
        <div className="home-body3">
          <div className="home-faq">FAQ</div>
          <div className="home-info">
            <div className="home-reviews">REVIEWS</div>
            <div className="home-story">STORY</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
