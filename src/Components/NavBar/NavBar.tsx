import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  return (
    <Menu>
      <AnchorLink className="menu-item" href="#Header">
        Home
      </AnchorLink>
      <AnchorLink className="menu-item" href="#About">
        About
      </AnchorLink>
      <AnchorLink className="menu-item" href="#Education">
        Education
      </AnchorLink>
      <AnchorLink className="menu-item" href="#Works">
        Works
      </AnchorLink>
      <AnchorLink className="menu-item" href="#Contact">
        Contact me
      </AnchorLink>
    </Menu>
  );
};

export default NavBar;
