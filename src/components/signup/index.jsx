import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
        <div className="container">
        <form className="form">
            <input id = "name" type="text" placeholder="Name" ></input>
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="Passward"></input>
            <input type="text" placeholder="City"></input>
            <input type="text" placeholder="Dist"></input>
            <input type="text"placeholder="State"></input>
            <input type="text"placeholder="Country"></input>
            <input type="text"placeholder="Pincode"></input>
            <input type="text"placeholder="Mobile No"></input>
            <button className="btn-large blue">SignUp</button>
        </form>
    </div>
    )
  }
}