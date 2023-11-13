import React from "react"

class Menu extends React.Component{
    render(){
    return(
        <section id="nav-body">
            <article>
                <ul>
                    <li><img className="nav-logo-apple" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYbJCz2_u3FWJJ84h1cqAHSzHtDQ0jizIB5Q&usqp=CAU" alt="apple" /></li>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>Ipad</li>
                    <li>Iphone</li>
                    <li>Watch</li>
                    <li>Airpods</li>
                    <li>TV&Home</li>
                    <li>Entertainment</li>
                    <li>Accessories</li>
                    <li>Support</li>
                    <li><img className="nav-logo-search" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5zznHK4PL9wfz5uhr4OqMWnSNZcaxr6wx1VoEXWEn-YOXtXz0XsG-RK-vc9HT9cSZXc&usqp=CAU" alt="search" /></li>
                    <li><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZ7FBcznjiCE5lCfexB6QAKy-FmW7wLcAZ620p37m8AV-9eOiK" className="nav-logo-bag" alt="bag" /></li>
                </ul>
            </article>
        </section>
    )
}
}

export default Menu;