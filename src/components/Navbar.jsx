import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
function Navbar() {
  return (
    <header className="header">
      <div>
      <Link to="/">
        <img className="navbar__logo" src={Logo} alt="Logo icon" />
      </Link>
      </div>
      <nav className="navbar">
        <div className="navbar__box">
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/people">People</Link>
          <Link to="/publications">Publications</Link>
          <Link to="/positions">Open Positions</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
