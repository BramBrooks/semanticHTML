import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../media/images/rediffusion_logo.png";
import Nav from "./navbar/nav";

// this is handling the menu icon click

class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="header_container">
        {" "}
        <header>
          <div className="title_and_logo_container">
            <Link to="/">
              <img src={logo} alt="logo"></img>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h1>Semantic HTML</h1>
            </Link>
          </div>
          {/* 
          <Nav /> */}
          {/* <Nav result={this.state.clicked} /> */}
          <Nav result={this.state.clicked} handleClick={this.handleClick} />
          <div className="menu-icon" onClick={this.handleClick}>
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
