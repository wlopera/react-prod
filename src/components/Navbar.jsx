import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="" className="navbar">Inicio</Link>
      <Link to="about" className="navbar">Acerca de</Link>
    </nav>
  );
};

export default Navbar;
