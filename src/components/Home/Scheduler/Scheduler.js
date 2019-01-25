import React, { Component } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import "react-datepicker/dist/react-datepicker.css";
import "./Scheduler.scss";
import Form from "./Form";
import TypeForm from "./TypeForm";
import Thanks from "./Thanks";
import axios from "axios";
import moment from "moment";

class Scheduler extends Component {
  state = {
    selectedDays: [],
    counter: 1,
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    phone1: "",
    phone2: "",
    phone3: "",
    email: "",
    type: []
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

  handleInfoChange = (prop, e) => {
    this.setState({ [prop]: e });
  };

  handleTypeChange = e => {
    let newType = [...this.state.type];
    newType.push(e);
    this.setState({ type: newType });
  };

  submitApt = () => {
    this.setState({ counter: 4 });
    const {
      selectedDays,
      firstName,
      lastName,
      address,
      city,
      state,
      phone1,
      phone2,
      phone3,
      email
    } = this.state;
    let phone = phone1 + phone2 + phone3;
    let date = "";
    selectedDays.map(day => {
      let newDate = moment(day).format("MM/DD/YYYY");
      return date += `${newDate},`;
    });
    date = date.slice(0, -1);
    let type = "";
    this.state.type.map(t => {
      type += `${t},`;
    });
    type = type.slice(0, -1);
    console.log(type)
    axios.post("/api/apts", { firstName, lastName, address, city, state, phone, email, date, type});
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
    const { counter } = this.state;
    const view = counter === 1 ? "date-picker" : "date-picker-none";
    const leftBtn =
      counter === 1 || counter === 4
        ? "fa-chevron-circle-left-none"
        : "fa-chevron-circle-left";
    const rightBtn =
      counter >= 3 ? "fa-chevron-circle-right-none" : "fa-chevron-circle-right";
    return (
      <div className="Scheduler">
        <div className="scheduler">
          <h4>SCHEDULE AN APPOINTMENT TODAY!</h4>
          <h5>Select the dates you are available.</h5>
          <div className="mini-cal">
            <i
              className={`fas ${leftBtn} fa-2x`}
              onClick={() => this.changeScheduler("back")}
            />
            <div className={view}>
              <DayPicker
                selectedDays={this.state.selectedDays}
                onDayClick={this.handleDayClick}
                disabledDays={[{ daysOfWeek: [0, 7] }]}
              />
            </div>
            <Form counter={counter} infoChange={this.handleInfoChange} />
            <TypeForm
              counter={counter}
              typeChange={this.handleTypeChange}
              submitApt={this.submitApt}
            />
            <Thanks counter={counter} />
            <i
              className={`fas ${rightBtn} fa-2x`}
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
