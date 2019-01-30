import React, { Component } from 'react'

export default class Desktop extends Component {
  render() {
    const {datalist} = this.props
    return (
      <div>
        this is a container showing mock data.
          {datalist.map((datum,idx)=><button key={idx} onClick={()=>console.log(datum)}>{datum.value}</button>)}
      </div>
    )
  }
}
