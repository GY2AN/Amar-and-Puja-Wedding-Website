import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="containerNav">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="#hero" onClick={() => setIsOpen(false)}>Welcome</a></li>
          <li><a href="#dates" onClick={() => setIsOpen(false)}>Events</a></li>
          <li><a href="#messagevideonav" onClick={() => setIsOpen(false)}>Friends&Family</a></li>
          <li><a href="#WeddingInvitationnav" onClick={() => setIsOpen(false)}>Invitation</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

