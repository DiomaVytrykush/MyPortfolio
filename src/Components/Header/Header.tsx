import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

type HeaderPropsType = {
  handleToggleTheme: () => void;
};

const Header = (props: HeaderPropsType) => {
  return (
    <div id="Header">
      <NavBar />
      <div className="Header__contacts__wrapper">
        <div className="Header__theme">
          <label className="switch">
            <input type="checkbox" onClick={props.handleToggleTheme} />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="Header__contacts__content">
          <h1></h1>
          <div className="Header__contact__icons">
            <a
              href="https://www.facebook.com/dioma.vytrykush"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.instagram.com/Spo7l1ght/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/demian-vytrykush-9899b01a3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="Header__contact__buttons">
            <a
              href="https://drive.google.com/file/d/1fhO9VT9CLXc9cQQFF9Iit_3sZNYdS0zp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
