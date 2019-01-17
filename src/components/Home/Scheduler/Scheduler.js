import React, { Component } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import "react-datepicker/dist/react-datepicker.css";
import "./Scheduler.css";
import Carousel from "./Carousel";

class Scheduler extends Component {
  state = {
    selectedDays: []
  };

  handleDayClick = (day, { selected }) => {
    const { selectedDays } = this.state;
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    this.setState({ selectedDays });
  };

  render() {
    // let todayObj = new Date();
    // let day = todayObj.getDate();
    // let month = todayObj.getMonth() + 1;
    // let year = todayObj.getFullYear();

    return (
      <div className="Scheduler">
        <div className="scheduler">
          <h4>FREE ESTIMATE!</h4>
          <h5>Select the dates you are available.</h5>
          <div className="mini-cal">
            <i class="fas fa-chevron-circle-left fa-2x" />
            <div className="date-picker">
              <DayPicker
                selectedDays={this.state.selectedDays}
                onDayClick={this.handleDayClick}
                //   initialMonth={new Date(2017, 3)}
                disabledDays={[{ daysOfWeek: [0, 7] }]}
              />
            </div>
            <i class="fas fa-chevron-circle-right fa-2x" />
          </div>
        </div>
        <div className="Scheduler-carousel">
          <Carousel />
        </div>
      </div>
    );
  }
}

export default Scheduler;
