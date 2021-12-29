import React, { createContext } from "react";
import { Link } from "react-router-dom";
import logo from "../media/images/rediffusion_logo.png";
import Nav from "./navbar/nav";
import Hamburger from "./hamburger";

function Header() {
  return (
    <div className="header_container">
      {" "}
      <header>
        <div className="title_logo_nav_container">
          {/* change padding or margin to sort hover area
          {" "} */}
          <div className="title_and_logo_container">
            <Link to="/">
              <img src={logo} alt="logo"></img>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h1>Semantic HTML</h1>
            </Link>
          </div>
          <Nav />
        </div>

        <Hamburger />
      </header>
    </div>
  );
}

export default Header;
