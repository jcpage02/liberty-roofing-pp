import React, {Component} from 'react'
import './JobTable.scss'
import axios from 'axios'

class JobTable extends Component {

  state = {
    jobs: [],

  }

  componentDidMount() {
    axios.get('/active-jobs')
    .then(res => this.setState({jobs: res.data}))
  }
  
  render() {
    const {jobs} = this.state

    let keys = []
    let values = []

    const headers = jobs.map((jobObj, i) => {
      if(i === 0) {
        keys.push(Object.keys(jobObj))
        console.log(keys)
        return keys[0].map(key => (
          <div className="jobTbl-header">{key}</div>
        ))
      }
    })
    const rows = jobs.map((jobObj, i) => {
        values.push(Object.values(jobObj))
        console.log(values)
        return values[i].map(value => (
          <div className="jobTbl-item">{value}</div>
        ))
    })
    return (
      <div className='JobTable'>
        <div className="jobTbl-container">
          {headers}
          {rows}
        </div>
      </div>
    )
  }
}

export default JobTable