import React from 'react'
export default class Homepage extends React.Component{

    render(){
        return(
            <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <div className="brand-logo left">Laptop Rent</div>
                    <ul class="right">
                        <li><input type="text" placeholder="userId"></input></li>
                        <li><input type="text" placeholder="passward"></input></li>
                        <li><button className="btn blue">LogIn</button></li>
                        <li><button className="btn blue">SignUp</button></li>
                    </ul>
            
            </div>
        </nav>
        )
    }

}