import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../media/images/rediffusion_logo.png";
import Nav from "./navbar/nav";

// this is handling the menu icon click

class Header extends Component {
  state = { clicked: false };

  // updates state to toggle hamburger / responsive navbar
  handleClick_1 = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // updates state to toggle to hamburger once nav option clicked
  handleClick_2 = () => {
    this.setState({ clicked: false });
  };

  render() {
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
          <Nav result={this.state.clicked} handleClick_2={this.handleClick_2} />

          {/* this is the hamburger menu icon */}
          <div className="menu-icon" onClick={this.handleClick_1}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
