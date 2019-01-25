import React, { Component } from "react";
import './Calendar.css'

class Calendar extends Component {
  render() {
    const weekArray = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const week = weekArray.map(day => (
      <div>{day}</div>
    ))

    return (
      <div className="Calendar">
        <div className="calendar">
          <div className="calendar-header">
            <h5>Month Year</h5>
            <h5>Back and Forward</h5>
          </div>
          <div className="calendar-weeks">
            {week}
            </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
