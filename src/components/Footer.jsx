import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <Link to="/"><img className="footer__logo"src={Logo} alt="Logo icon" /></Link>
      <a href="https://instagram.com">Instagram</a>
    </div>
  );
}

export default Footer;
