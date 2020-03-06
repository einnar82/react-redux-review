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
        <NavLink to="/" className="brand-logo">
          Fatebook
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {navList.map((item, key) => (
            <li key={key}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// withRouter is a HOC for supercharge the component with react router functions
// Also withRouter can access the props of react router
export default withRouter(Navbar);
