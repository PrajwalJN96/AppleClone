import React from "react"
import Blocks from "./Blocks"
class Footer extends React.Component{
    render(){
        return(
        <>
            <hr id="ruler"/>
            <div id="f-logo">
                <img src="https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-mobile.jpg"   alt="" />
             <div>&gt; iPhone</div>
            </div>
            <div id="blocs">
            <Blocks/>
            <Blocks/>
            <Blocks/>
            <Blocks/>
            <Blocks/>
            </div>
        </>
        )
    }
}
export default Footer;