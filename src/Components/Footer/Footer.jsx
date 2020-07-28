import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer__wrapper">
                <div className="copyright">
                    &copy; 2020 | Created & Designed By <a href="https://github.com/DiomaVytrykush" target="_blank" > Dioma Vytrykush </a>
                </div>
                <div className="Footer__icons">
                    <a href="https://www.facebook.com/dioma.vytrykush" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://www.instagram.com/Spo7l1ght/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.linkedin.com/in/demian-vytrykush-9899b01a3/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://github.com/DiomaVytrykush" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer