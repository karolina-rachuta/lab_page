import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PhoneIcon from "../assets/tel.png";
import EmailIcon from "../assets/email.png";
import LocationIcon from "../assets/location.png";

function Contact() {
  return (
    <div className="container">
      <Navbar />
      <div className="contact">
        <h2 className="contact__hdl">Contact</h2>
        <div className="contact__box">
          <div>
            <p className="contact__name">FirstName LastName</p>
            <p className="contact__text">
              <img className="contact__icon" src={EmailIcon} alt="Email icon" />{" "}
              xyz@amu.edu.pl
            </p>
            <p className="contact__text">
              <img className="contact_icon" src={PhoneIcon} alt="Phone icon" />{" "}
              829 00 0000
            </p>
            <p className="contact__text">
              <div>
                <a href="https://maps.app.goo.gl/u3aa4uVqtLps6BHK7">
                  <img
                    className="contact__icon"
                    src={LocationIcon}
                    alt="Location icon"
                  />
                </a>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit., wing A, room X.Y
                </p>
              </div>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
