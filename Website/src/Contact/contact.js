import React, { Component } from "react";
import "./contact.css";
import zei from "../images/zei.jpeg"
import jb from "../images/jb.jpeg"
import cs from "../images/cs.jpg"
import ina from "../images/Ina.jpg"
import amanda from "../images/amanda.jpg"

class Contact extends Component {
  render() {
    return (
      <div className="contact-page1">
        <p className="contact-title1">FOUNDERS</p>
        <div className="founders">
          <div className="jb">
            <img alt="Jasmine" src={jb} className="bildjb"></img>
            <p className="contact-title3"> Jasmine Bergdahl</p>
            <p className="contact-title4"> Email: jasber@kth.se</p>
          </div>
          <div className="ir">
            <img alt="Ina" src={ina} className="bildir"></img>
            <p className="contact-title5"> Ina Rickman</p>
            <p className="contact-title6"> Email: inaric@kth.se</p>
          </div>
          <div className="ah">
            <img alt="Amanda" src={amanda} className="bildah"></img>
            <p className="contact-title7">Amanda Heynes</p>
            <p className="contact-title8"> Email: heynes@kth.se</p>
          </div>
          <div className="lj">
            <img alt="Corneliea" src={cs} className="bildlj"></img>
            <p className="contact-title9">Cornelia Sundqvist</p>
            <p className="contact-title10"> Email: cosu@kth.se</p>
          </div>
          <div className="ZA">
            <img alt="Zeineb" src={zei} className="bildlj"></img>
            <p className="contact-title11">Zeineb Amri</p>
            <p className="contact-title12"> Email: zeineba@kth.se</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
