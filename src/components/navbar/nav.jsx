import React from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

function Nav(props) {
  const result = props.result;
  const handleClick = props.handleClick;

  //  OK need to find a way to hide MAIN when nav menu active is showing 
  //  So try sharing that info like has been shown here and then do conditional formatting? 

  return (
    <nav>
     
      <ul className={result ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <Link to={item.url} onClick={handleClick}>
              <li key={index}> {item.title}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
