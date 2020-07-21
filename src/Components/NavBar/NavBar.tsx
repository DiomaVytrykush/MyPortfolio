import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Navbar.css'

const NavBar = () => {
    return (
        <Menu >
            <a className="menu-item" href="/">Home</a>
            <a className="menu-item" href="/about"> About me</a>
            <a className="menu-item" href="/services">Education & Experiences</a>
            <a className="menu-item" href="/contact">Works</a>
        </Menu>
    );
};

export default NavBar
