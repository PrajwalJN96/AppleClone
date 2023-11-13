import React,{Component} from 'react'

export default class Img extends Component{
  render(){
    let bigImg = this.props.bigImg;
    let bigImgAlt = this.props.bigImgAlt;
    return (
      <img src={bigImg} id="bsImg" alt={bigImgAlt} />
      )
    }
}
