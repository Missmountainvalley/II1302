import React, { Component } from "react";
import { Link } from "react-router-dom";
import modelInstance from "../data/DisplayModel";
import "./Message.css";

class Message extends Component {
  constructor(props){
    super(props);
  }

  newPage(){
    modelInstance.newStorage(localStorage.getItem("message"));
  }

  render() {
    return (
      <div>
        <div className="headline">Welcome to your message submission!</div>
        <div className="headtext1">Type a message to the door-display</div>
        <form>
          <input type="text" id="message" onChange={event =>{modelInstance.newMessage(event)}} name="message" placeholder="Enter message..."/>
        </form>
        <Link to="/confirm"><button className="submitBtn" id="SubmitBtn" onClick={() =>{this.newPage()}}>Submit message!</button></Link>
      </div>
    );
  }
}

export default Message;
