import React, { Component } from "react";
import "./Home.scss";
import Scheduler from "./Scheduler/Scheduler";
import Header from "../Header/Header";
import Reviews from "./Reviews/Reviews";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header home="home" />
        <Scheduler />
        <div className="home-body3">
          <div className="home-info">
            <div className="home-story">
              <h3>LIBERTY ROOFING, SIDING, GUTTERS & WINDOWS</h3>
              <p>
                Liberty Roofing, Siding, Gutters & Windows is a family owned and
                operated company, serving the roofing and siding needs of home
                and business owners throughout Liberty, MO and beyond. We’re the
                company to call when you need installation, repairs and more!
                With more than 15 years of experience, our experts are ready to
                help you protect your home from the elements.
              </p>
            </div>
            <Reviews />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
