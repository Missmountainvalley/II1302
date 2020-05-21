import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import modelInstance from "./data/DisplayModel";
import Home from "./Home/home";
import Confirm from "./Confirm/Confirm";
import Message from "./Message/Message";
import AboutUs from "./AboutUs/aboutUs";
import Contact from "./Contact/contact";
import logo from "./images/logo.png"

export class App extends Component {
  constructor(props) {
    super(props);
    modelInstance.databaseInistalize();
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <Link to="/">
          <img src={require('../images/logo.png')} className = "logo"></img>
            <p className="msgDlvry">MSG DLVRY</p>
          </Link>
          <Link to="/contact">
            <p className="contact">Contact 1</p>
          </Link>
          <Link to="/aboutus">
            <p className="about-us">About us</p>
          </Link>
          <Link to="/">
            <p className="homeText">Home</p>
          </Link>

        </div>
          {/* We rended diffrent component based on the path */}
      <Route exact path="/" component={Home} />

      <Route path="/aboutus" component={AboutUs}/>
      <Route path="/contact" component={Contact}/>

      <Route
        path="/confirm"
        render={() => <Confirm model={modelInstance} />}
      />

      <Route
        path="/message"
        render={() => <Message model={modelInstance} />}
      />

      <Route
        path="/search"
        render={() => <AboutUs model={modelInstance} />}
      />
      </header>
    </div>
    );
  }
}

export default App;
