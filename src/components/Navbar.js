import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const navList = [
  {
    to: "/",
    name: "Home"
  },
  {
    to: "/about",
    name: "About"
  },
  {
    to: "/contact",
    name: "Contact"
  }
];

const Navbar = props => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Fatebook
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {navList.map((item, key) => (
            <li>
              <NavLink to={item.to} key={key}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// withRouter is a HOC for supercharge the component with react router functions
export default withRouter(Navbar);
