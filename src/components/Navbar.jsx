import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleHamburgerMenu(e) {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <header className="header">
      <div className="logo__box">
        <Link to="/">
          <img className="logo__img" src={Logo} alt="Logo icon" />
        </Link>
        <div
          className="hamburger"
          onClick={handleHamburgerMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={`navbar__box ${isOpen? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/people">People</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/positions">Open Positions</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
