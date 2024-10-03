import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <Link to="/"><img className="footer__logo"src={Logo} alt="Logo icon" /></Link>
      <a href="https://instagram.com">Instagram</a>
      <p>xyz@amu.edu.pl</p>
      <p>829 00 0000</p>
      <p>Uniwersytetu Poznańskiego 8, Blok A, p. 2.9, 61-614 Poznań, Polska</p>

    </div>
  );
}

export default Footer;
