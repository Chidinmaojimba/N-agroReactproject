import React from "react";
import npowerlogo from "../assets/npowerlogo.png"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={npowerlogo} alt="Logo" className="nav-logo" />
      </div>

      <ul className="nav-links">
        <li>About</li>
        <li>Application Status</li>
        <li>Contact Us</li>
      </ul>

      <button className="apply-btn">Apply</button>
    </nav>
  );
};

export default Navbar;
