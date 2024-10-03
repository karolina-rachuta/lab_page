import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Contact() {
  return (
    <div className="container">
      <Navbar />
      <div className="contact">
      <h2 className="contact__hdl">Contact</h2>
      <div>
        <p>Bachelor, Master and PhD students are welcome to perform reseach in our Lab</p>
        <Link to="/contact">Contact for more information</Link>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
