import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PhoneIcon from "../assets/tel.webp";
import EmailIcon from "../assets/email.webp";
import LocationIcon from "../assets/location.webp";

function Contact() {
  return (
    <div className="container container__contact">
      <Navbar />
      <h2 className="contact__hdl">Contact</h2>
      <div className="contact">
        <div className="contact__container">
          <div className="contact__box">
            <p className="contact__name">FirstName LastName</p>
            <div className="contact__row">
              <img
                className="contact__icon"
                loading="lazy"
                src={EmailIcon}
                alt="Email icon"
              />
              <p className="contact__text"> xyz@amu.edu.pl</p>
            </div>
            <div className="contact__row">
              <img
                className="contact__icon"
                loading="lazy"
                src={PhoneIcon}
                alt="Phone icon"
              />
              <p className="contact__text">829 00 0000</p>
            </div>
            <div className="contact__row">
              <a href="https://maps.app.goo.gl/u3aa4uVqtLps6BHK7">
                <img
                  loading="lazy"
                  className="contact__icon"
                  src={LocationIcon}
                  alt="Location icon"
                />
              </a>
              <p className="contact__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit., wing
                A, room X.Y
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
