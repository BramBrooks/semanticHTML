import React from "react";
import logo from "../media/images/rediffusion_logo.png";
import bram from "../media/images/bram.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer_item_1">
          {/* <img src= {bram} alt="logo"></img> */}
        </div>
        {/* <div className="footer_item_1">
          <img src={logo} alt="logo"></img>
        </div> */}
        <div className="footer_item_2">
          {/* 10 */}
          <p>Bram Brooks</p>

          <p>
            <a
              href="https://www.linkedin.com/in/bram-brooks-2653051b4/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin"></i> Linked In
            </a>
          </p>
          <p>T: 07714 787 631</p>
          <p>
            E: <a href="mailto:bram451@Hotmail.com">hello@brambrooks.com</a>
          </p>
        </div>
        {/* <div className="footer_item_3">
          <img src={logo} alt="bram"></img>
        </div> */}
      </div>

      <div className="small_print">
        <p>
          <small>
            Site created using Voice Driven Development - Winter 2021.
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
