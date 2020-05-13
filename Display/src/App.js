import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css'
import logo from "./images/logo.png"
import blomma from "./images/blomma.png"

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      message: ""
    }

    var databaseConfig = {
      apiKey: "AIzaSyCv3rnRNfUOEBh5Ol1ZiGwXr6pD9cRotYU",
      authDomain: "msg-dlb.firebaseapp.com",
      databaseURL: "https://msg-dlb.firebaseio.com",
      projectId: "msg-dlb",
      storageBucket: "msg-dlb.appspot.com",
      messagingSenderId: "58422300991",
      appId: "1:58422300991:web:217d5889656b004a85c38a",
      measurementId: "G-B9KDZXM7JZ"
    };
    if(!firebase.apps.length){
      firebase.initializeApp(databaseConfig);
    }
    this.db = firebase.database().ref('message');
  }

  componentDidMount(){
    try {
      this.db.on('value', data => {
      var m = Object.values(data.val())
        this.setState({
            message: m
        })
      })
    } catch(error) {
      console.log("error")
      console.log(error)
    }
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h2>Welcome to your door-display!
            <img alt="logo" src={logo} className = "logo"></img>
          </h2>
          <div className="screen">
            <div className="blomma1">
              <img alt="blomma" src={blomma} className = "blomma"></img>
            </div>
            <div className="door1">
              <div className="door2">
                <div className="door3">
                  <div id="circle"></div>
                  <div className="door4">
                    <div className="door5">{this.state.message}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    </div>
    )
  }
}

export default App;
