import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


interface IntrinsicAttributes {
    pageWrapId: number;
    outerContainerId: string
}

class Header extends React.Component<IntrinsicAttributes> {
    render() {
        return (
            <div className="Header">
                <NavBar />
                <div className="Contacts__wrapper">
                    <div className="Contacts__content">
                        <h1></h1>
                        <div className="Contact__icons">
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <div className="Contact__buttons">
                            <a href="#" className="">Contact me</a>
                            <a href="#" className="">Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header