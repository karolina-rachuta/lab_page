import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import PhoneIcon from "../assets/tel.png";
import EmailIcon from "../assets/email.png";
import LocationIcon from "../assets/location.png";

function Footer() {
  return (
    <div className="footer">
      <Link to="/">
        <img className="footer__logo" src={Logo} alt="Logo icon" />
      </Link>
      <div className="footer__text-box">
        <p className="footer__text"><img className="footer__img" src={EmailIcon} alt="Email icon" /> xyz@amu.edu.pl</p>
        <p className="footer__text"><img className="footer__img" src={PhoneIcon} alt="Phone icon" /> 829 00 0000</p>
        <p className="footer__text"> <a href="https://maps.app.goo.gl/u3aa4uVqtLps6BHK7"><img className="footer__img" src={LocationIcon} alt="Location icon" /></a> UAM Wydział Chemii, Blok A, p. 2.9
        </p>
      </div>
    </div>
  );
}

export default Footer;
