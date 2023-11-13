import React, { Component } from 'react'
import SmallPage from "./SmallPage"

export default class Dpage extends Component {
  render() {
    return (
      <div id='bpage'>
    <SmallPage/>
    <SmallPage/>
      </div>
    )
  }
}