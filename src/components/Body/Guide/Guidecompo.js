import React, { Component } from 'react'
import "../../../allcss.css"


class Guidecompo extends Component{
  render() {
    return (
        <div className="Guidecompo-wrapper">
        <div className="Guidecompo-image">
          <img src={this.props.imgsrc} alt=""></img>
        </div>
        <div className="Guidecompo-heading">
          <h1>{this.props.title}</h1>
        </div>
        <div className="Guidecompo-para">
          <p>
            {this.props.para}
          </p>
        </div>
      </div>
    );
  }
}

export default Guidecompo