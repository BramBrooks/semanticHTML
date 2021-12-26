import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        <li>
          <Link to="/text">Text</Link>
        </li>
        <li>
          <Link to="/table">Tables</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/embedded">Embedded</Link>
        </li>
        <li>
          <Link to="/meta">Meta</Link>
        </li>
        {/* <li>
          <Link to="/misc">Misc</Link>
        </li> */}
        <li>
          <Link to="/tags">Tags</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
