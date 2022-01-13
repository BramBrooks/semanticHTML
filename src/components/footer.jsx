import React from "react";

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
          <p>T: 07714787631</p>
          <p>
            E: <a href="mailto:bram451@Hotmail.com">bram451@hotmail.com</a>
          </p>
          {/* <p>
            E: <a href="mailto:bram451@Hotmail.com">hello@brambrooks.com</a>
          </p> */}
        </div>
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
