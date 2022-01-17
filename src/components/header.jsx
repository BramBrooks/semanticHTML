import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../media/images/rediffusion_logo.png";
import Nav from "./navbar/nav";

function Header(props) {
  const result = props.result;
  const handleNavClick = props.handleNavClick;
  const handleHamburgerClick = props.handleHamburgerClick;

  return (
    <div className="header_container">
      <header>
        <div className="title_and_logo_container">
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>Semantic HTML</h1>
          </Link>
        </div>

        {/* <Nav /> */}
        <Nav result={result} handleNavClick={handleNavClick} />

        {/* this is the hamburger menu icon */}
        <div className="menu-icon" onClick={handleHamburgerClick}>
          <i className={result ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </header>
    </div>
  );
}

export default Header;
