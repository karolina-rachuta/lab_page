import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NextLink from "../assets/next.png";
function Positions() {
  return (
    <div className="container container__positions">
      <Navbar />
      <h2 className="positions__hdl">Open Position</h2>
      <div className="positions">
        <div className="positions__box">
          <p className="positions__text">
            We welcome Bachelor&apos;s, Master&apos;s, and PhD students to begin
            their research in our lab.
          </p>
          <Link className="positions__link" to="/contact">
            Contact for more information{" "}
            <img
              className="positions__icon"
              src={NextLink}
              alt="Icon to be transferred"
            />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Positions;
