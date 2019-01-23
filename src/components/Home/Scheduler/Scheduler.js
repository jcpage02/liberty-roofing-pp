import React, { Component } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import "react-datepicker/dist/react-datepicker.css";
import "./Scheduler.css";
import Form from "./Form";
import TypeForm from "./TypeForm";

class Scheduler extends Component {
  state = {
    selectedDays: [],
    counter: 1
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
    const { selectedDays } = this.state;
  };

  changeScheduler = direction => {
    const { counter } = this.state;
    let newCount = counter;
    if (direction === "next") {
      newCount++;
      if (newCount > 3) {
        newCount = 3;
      }
      this.setState({ counter: newCount });
    } else {
      if (direction === "back") {
        newCount--;
        if (newCount < 1) {
          newCount = 1;
        }
        this.setState({ counter: newCount });
      }
    }
  };

  render() {
    console.log(this.state);
    const { counter } = this.state;
    const view = counter === 1 ? "date-picker" 
      : counter === 2 ? "Form" 
      : counter === 3 ? 'TypeForm'
      : null;
      console.log(view)

    return (
      <div className="Scheduler">
        <div className="scheduler">
          <h4>SCHEDULE AN APPOINTMENT TODAY!</h4>
          <h5>Select the dates you are available.</h5>
          <div className="mini-cal">
            <i
              className="fas fa-chevron-circle-left fa-2x"
              onClick={() => this.changeScheduler("back")}
            />
            <div className={view}>
              <DayPicker
                selectedDays={this.state.selectedDays}
                onDayClick={this.handleDayClick}
                disabledDays={[{ daysOfWeek: [0, 7] }]}
              />
            </div>
            <Form view={view}/>
            <TypeForm view={view}/>
            <i
              className="fas fa-chevron-circle-right fa-2x"
              onClick={() => this.changeScheduler("next")}
            />
          </div>
        </div>
        <div className="Scheduler-carousel" />
      </div>
    );
  }
}

export default Scheduler;
