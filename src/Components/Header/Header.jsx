import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = (props) => {

    return (

        <div className="Header">
            <NavBar />
            <div className="Contacts__wrapper">
                <div className="Header__theme">
                    <label className="switch">
                        <input type="checkbox" onClick={props.handleToggleTheme} />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="Contacts__content">
                    <h1></h1>
                    <div className="Contact__icons">
                        <a href="https://www.facebook.com/dioma.vytrykush" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://www.instagram.com/Spo7l1ght/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.linkedin.com/in/demian-vytrykush-9899b01a3/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                    <div className="Contact__buttons">
                        <a href="#" className="">Contact me</a>
                        <a href="https://drive.google.com/file/d/1biv3upnTyQNcV4aScPOVvajHbyQOwBgk/view?usp=sharing" target="_blank" className="">Open CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header