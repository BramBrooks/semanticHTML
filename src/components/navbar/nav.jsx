import React from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

const Nav = () => {
  return (
    <nav>
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
