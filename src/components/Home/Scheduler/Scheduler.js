import React, { Component } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import "react-datepicker/dist/react-datepicker.css";
import "./Scheduler.css";

class Scheduler extends Component {
  state = {
    selectedDays: []
  };

  handleDayClick = (day, { selected }) => {
    // let day = moment(day).format('MM/DD/YYYY')
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

  submitDays = () => {
    const {selectedDay} = this.state
    
  }

  render() {
    // console.log(this.state.selectedDays)

    

    return (
      <div className="Scheduler">
        <div className="scheduler">
          <h4>SCHEDULE AN APPOINTMENT TODAY!</h4>
          <h5>Select the dates you are available.</h5>
          <div className="mini-cal">
            <i className="fas fa-chevron-circle-left fa-2x" />
            <div className="date-picker">
              <DayPicker
                selectedDays={this.state.selectedDays}
                onDayClick={this.handleDayClick}
                disabledDays={[{ daysOfWeek: [0, 7] }]}
              />
            </div>
            <i className="fas fa-chevron-circle-right fa-2x" onClick={() => this.submitDays()}/>
          </div>
        </div>  
        <div className="Scheduler-carousel">
          {/* <img src="https://bealingroofing.com/wp-content/uploads/2018/01/HomeImage1.jpg" /> */}
          {/* <Carousel /> */}
        </div>
      </div>
    );
  }
}

export default Scheduler;
