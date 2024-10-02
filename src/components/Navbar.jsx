import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar" style={{ display: "flex", gap: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
      <Link to="/people">People</Link>
      <Link to="/publications">Publications</Link>
      <Link to="/positions">Open Positions</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Navbar;
