import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Confirm.css";
//import modelInstance from "../data/DisplayModel";

class Confirm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="frame">
      <div className="confirmText">Your submission was successful!
        <div className="confirmText2">The text that will be sumbmitted is:
          <div className="confirmText3">{localStorage.getItem("message")}</div>
        </div>
      </div> <Link to="/"><button className="submitBtn">Back to home!</button></Link>
      </div>
    );
  }
}

export default Confirm;
