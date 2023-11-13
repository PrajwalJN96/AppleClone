import React from "react"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Page from "./components/Page"
import "./Global.css"
import Dpage from "./components/Dpage"

class App extends React.Component{
        render(){
    return(
        <>
        <Nav/>

        <Page 
        when = "New"
        product = "iPhone 15 Pro"
        product_detail = "https://www.apple.com/v/iphone/home/bp/images/overview/hero/headline_titanium__cj5ay941qj6u_large.jpg"
        product_alt="titanium"
        price = "₹21483.00/mo* or ₹134900.00*"
        btn = "Buy"
        more = {`Learn more >`}
        product_img = "https://www.apple.com/v/iphone/home/bp/images/overview/hero/hero_iphone_15_pro__eqwrvy72748y_large.jpg"
        product_img_alt = "black-iphone"
        />

        <Page
        background="white" 
        fontColor="black"
        img_width = "100px"
        img_margin={{ marginLeft: "-100px" }}
        when = "New"
        product = "iPhone 15"
        product_detail = "https://www.apple.com/v/iphone/home/bp/images/overview/hero/headline_titanium__cj5ay941qj6u_large.jpg"
        product_alt="titanium"
        price = "₹12483.00/mo* or ₹79900.00*"
        btn = "Buy"
        more = {`Learn more >`}
        product_img = "https://www.apple.com/v/iphone/home/bp/images/overview/hero/hero_iphone_15_pro__eqwrvy72748y_large.jpg"
        product_img_alt = "blue-iphone"
        />
        <Dpage/>
        <Footer/>
        </>
    )
}
}
export default App;