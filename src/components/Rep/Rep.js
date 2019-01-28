import React, {Component} from 'react'
import './Rep.scss'
import axios from 'axios';

class Rep extends Component {
  state = {
    reps: []
  }

componentDidMount(){
  axios.get('/reps')
  .then(res => {
    this.setState({reps: res.data})
  })
}

render() {
  const {reps} = this.state

  const keys = []
  const values = []

  reps.map((repObj, i) => {
    values.push(Object.values(repObj))
    if(i === 0) {
      keys.push(Object.keys(repObj))
    }
  })  

  const tableKeys = keys.map((keyArr) => {
    return keyArr.map((key, i) => {
      let newKey = ''
      key === 'name' ? (newKey = 'Name') : 
      key === 'phone' ? (newKey = 'Phone #') : 
      key === 'ytd' ? (newKey = 'YTD') : (newKey = key)
      return (<div key={i} className="repTblHeader">{newKey}</div>)
    })
  })

  const tableValues = values.map((valArr, i) => {
    return valArr.map((val, indx) => (
      <div className="repTblValue">{val}</div>
    ))
  })

    return (
      <div className='Rep'>
        <div className="repHeader">Project Managers</div>
          {tableKeys}
          {tableValues}
      </div>
    );
  }
}

export default Rep