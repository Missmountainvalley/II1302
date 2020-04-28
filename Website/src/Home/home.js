import React, { Component } from "react";
import "./home.css";
import logo from "../images/logo.png"

class Home extends Component {
  newPage() {
    window.location.replace('message');
  }

  update(){
    this.render();
  }

  render() {
    return (
    <div className="home">
      <p className="headline1">Welcome to your door-display application!</p>
      <div className="subhead">
        <p className="sub-headline">Time to update your display!</p>
        <img alt="pic" src={logo} className = "bild4"></img>
      </div>
      <div className ="divbtn">
        <button className="newPage" onClick={this.newPage}>Write message</button>
      </div>
      <div className="picDiv">
        <img alt="pic" src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=austin-distel-Imc-IoZDMXc-unsplash.jpg" className = "bild marginRight"></img>
        <img alt="pic" src="https://images.unsplash.com/photo-1522968941782-e27ac665baa3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=mikhail-derecha-q-XTB-YTsho-unsplash.jpg" className = "bild marginRight"></img>
        <img alt="pic" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=toa-heftiba-FV3GConVSss-unsplash.jpg" className = "bild"></img>
      </div>
    </div>
    );
  }
}

export default Home;
