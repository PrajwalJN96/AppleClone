import React, { Component } from 'react'
import Title from './Title'
import Img from './Img'

export default class SmallPage extends Component {
  render() {
    return (
      <div id='spage'>
        <Title id='stitle'
          titImg = "https://www.apple.com/v/home/bf/images/logos/apple-watch-ultra-2/promo_logo_apple_watch_ultra2__ggg2x39rsvqu_large.png"
          titImgAlt = "appleWatch"
          info = "Smarter.Brighter.Mightier"
        />
        <Img id='simg'
          bigImg = "https://www.apple.com/in/home/promos/apple-watch-ultra-2/images/promo_apple_watch_ultra2_order__dyxqj5ia98om_large.jpg"
          bigImgAlt = "watches"
        />
      </div>
    )
  }
}
