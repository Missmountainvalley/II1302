import ObservableModel from "./ObservableModel";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

class DisplayModel extends ObservableModel {
  constructor() {
    super();
  }

  databaseInistalize(){
    const firebaseConfig = {
      apiKey: "AIzaSyCv3rnRNfUOEBh5Ol1ZiGwXr6pD9cRotYU",
      authDomain: "msg-dlb.firebaseapp.com",
      databaseURL: "https://msg-dlb.firebaseio.com",
      projectId: "msg-dlb",
      storageBucket: "msg-dlb.appspot.com",
      messagingSenderId: "58422300991",
      appId: "1:58422300991:web:217d5889656b004a85c38a",
      measurementId: "G-B9KDZXM7JZ"
    };
    firebase.initializeApp(firebaseConfig);
  }

  newStorage(message) {
    firebase.database().ref("message").set({
      msg: message
    });
  }

  newMessage(event){
    localStorage.setItem("message", event.target.value);
  }
}

const modelInstance = new DisplayModel();
export default modelInstance;
