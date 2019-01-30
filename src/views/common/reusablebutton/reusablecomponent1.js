import React, { Component } from 'react'
import './style.scss'
export default class ReusableButton extends Component {
  render() {
    return (
      <div className="reus-btn" onClick={this.props.onClick}>
        {this.props.value}
      </div>
    )
  }
}

// estai gari dumb or reusable components common folder vitra rakhera pachi import garera use garne.