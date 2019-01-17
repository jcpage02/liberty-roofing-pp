import React, { Component } from "react";
import "./Appointment.css";

class Appointments extends Component {
  render() {

    const short = 'here is the data'
    const medium = 'here is even longer data'
    const long = 'here is the longest data ever'

    return (
      <div className="Appointments">
        <div className='apt-tbl'>
          <div className="apt-tbl-column">
            <div className="apt-tbl-header">Column Name</div>
            <input className='apt-tbl-cell' type="text" value={short}/>
            <input className='apt-tbl-cell' type="text" value={short}/>
            <input className='apt-tbl-cell' type="text" value={short}/>
          </div>
          <div className="apt-tbl-column">
            <div className="apt-tbl-header">Column Name</div>
            <input className='apt-tbl-cell' type="text" value={medium}/>
            <input className='apt-tbl-cell' type="text" value={medium}/>
            <input className='apt-tbl-cell' type="text" value={long}/>
          </div>
          <div className="apt-tbl-column">
            <div className="apt-tbl-header">Column Name</div>
            <input className='apt-tbl-cell' type="text" value={short}/>
            <input className='apt-tbl-cell' type="text" value={long}/>
            <input className='apt-tbl-cell' type="text" value={medium}/>
          </div>
          <div className="apt-tbl-column">
            <div className="apt-tbl-header">Column Name</div>
            <input className='apt-tbl-cell' type="text" value={long}/>
            <input className='apt-tbl-cell' type="text" value={long}/>
            <input className='apt-tbl-cell' type="text" value={long}/>
          </div>
          <div className="apt-tbl-column">
            <div className="apt-tbl-header">Column Name</div>
            <input className='apt-tbl-cell' type="text" value={long}/>
            <input className='apt-tbl-cell' type="text" value={long}/>
            <input className='apt-tbl-cell' type="text" value={long}/>
          </div>
          <div className="apt-tbl-column">
            <div className="apt-tbl-header">Column Name</div>
            <input className='apt-tbl-cell' type="text" value={long}/>
            <input className='apt-tbl-cell' type="text" value={long}/>
            <input className='apt-tbl-cell' type="text" value={long}/>
          </div>
          <div className="apt-tbl-column">
            <div className="apt-tbl-header">Column Name</div>
            <input className='apt-tbl-cell' type="text" value={long}/>
            <input className='apt-tbl-cell' type="text" value={long}/>
            <input className='apt-tbl-cell' type="text" value={long}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointments;
