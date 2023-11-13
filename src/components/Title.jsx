import React from 'react'

export default class Title extends React.Component{
  render(){
    let titImg = this.props.titImg;
    let info = this.props.info;
    let titImgAlt = this.props.titImgAlt;
    return (
      <div id='sm-title'>
        <img src={titImg} alt={titImgAlt} />
        <h2>{info}</h2>
        <div id="butn">
          <h4>Learn More &gt;&nbsp;&nbsp;&nbsp;</h4>
          <h4>Buy &gt;</h4>
        </div>
    </div>
  )
}
}
