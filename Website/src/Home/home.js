import React, { Component } from "react";
import "./home.css";

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
        <img alt="pic" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/cp0/95351073_3186433474714299_5257078603534827520_n.jpg?_nc_cat=103&_nc_sid=e007fa&_nc_ohc=gF9Y8cnnB6QAX-8I_99&_nc_ht=scontent-arn2-1.xx&oh=d988dfdad5c27fc41eaf19e3f729f26d&oe=5ECCC510" className = "bild4"></img>
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
