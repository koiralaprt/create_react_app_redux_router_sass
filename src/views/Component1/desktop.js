import React, { Component } from 'react'
import ReusableButton from '../common/reusablebutton/reusablecomponent1';

export default class Desktop extends Component {
  render() {
    return (
      <div>
        
        this is not a connected component. just a normal one (can also be said as a dumb component.)
        <br/>
        <br/>
        <br/>
        <br/>
        <ReusableButton onClick={()=>this.props.history.push('/cont')} value="Goto container" />
      </div>
    )
  }
}
