import { useState} from "react";
import { Link, useLocation  } from "react-router-dom";
import Logo from "../assets/logo.webp";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isHomePage = location.pathname === "/";
  const isNewsPage = location.pathname === "/news";
  const isPublicationsPage = location.pathname === "/publications";
  const isPeoplePage = location.pathname === "/people";
  const isPositionPage = location.pathname === "/positions";
  const isContactPage = location.pathname === "/contact";

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
        <Link className={isHomePage ? "navbar__link current" : "navbar__link"} to="/">Home</Link>
        <Link className={isNewsPage ? "navbar__link current" : "navbar__link"} to="/news">News</Link>
        <Link className={isPeoplePage ? "navbar__link current" : "navbar__link"} to="/people">People</Link>
        <Link className={isPublicationsPage ? "navbar__link current" : "navbar__link"} to="/publications">Publications</Link>
        <Link className={isPositionPage ? "navbar__link current" : "navbar__link"} to="/positions">Open Positions</Link>
        <Link className={isContactPage ? "navbar__link current" : "navbar__link"} to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
