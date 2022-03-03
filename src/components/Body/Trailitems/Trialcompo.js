import React, { Component } from 'react'
import "../../../allcss.css"

class Trialcompo extends Component{
  render() {
  return (
    <div>
        <div className='Trialitems-card-image'>
         <img src={this.props.img} alt=""></img>
       </div>
       <div className='Trialitems-card-head'>
         <h1>{this.props.head}</h1>
       </div>
       <div className='Trialitems-card-para'>
         <p>{this.props.para}</p>
       </div>
    </div>
  )
}
}

export default Trialcompo