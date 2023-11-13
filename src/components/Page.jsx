import React from "react"

class Page extends React.Component{
    render(){
        let when = this.props.when;
        let product = this.props.product;
        let product_detail = this.props.product_detail;
        let product_alt = this.props.product_alt;
        let price = this.props.price;
        let btn = this.props.btn;
        let more = this.props.more;
        let product_img = this.props.product_img;
        let product_img_alt = this.props.product_img_alt;
        let {background,fontColor} = this.props;
        let {img_width, img_margin} = this.props;
        let styles = {
            background,
            color: fontColor,
        }
        let img_style={
            img_margin,
            width: img_width
        }
        return(
            <section id="page1" style={styles}>
                <article style={styles}>
                    <div id="data" style={styles}>
                        <div>{when}</div>
                        <div style={styles}>{product}</div>
                        <div><img src={product_detail} alt={product_alt} /></div>
                        <div style={styles}>{price}</div>
                        <div id="buy">
                                <button>{btn}</button>
                                <div id="more">{more}</div>
                        </div>
                    </div>
                    <div id="big-img" style={img_style} >
                        <img src={product_img} alt={product_img_alt} />
                    </div>
                </article>
            </section>
        )
    }
}

export default Page;