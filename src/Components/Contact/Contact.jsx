import React, { useContext } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import ThemeContext from '../../Context/ThemeContext'

const Contact = () => {

    const themes = useContext(ThemeContext)

    return (
        <div className="Contact" style={themes}>
            <div className="Contact__wrapper">
                <Fade top cascade>
                    <h1>Contact me</h1>
                </Fade>
                <div className="Contact__cards">
                    <Fade top>

                        <div className="Contact__card">
                            <FontAwesomeIcon className="Contact__icon" icon={faEnvelope} />
                            <div className="Contact__card__content">
                                <h3>Email</h3>
                                <span>diomamyp@gmail.com</span>
                            </div>
                        </div>

                        <div className="Contact__card">
                            <FontAwesomeIcon className="Contact__icon" icon={faPhone} />
                            <div className="Contact__card__content">
                                <h3>Phone Number</h3>
                                <span>+38 (096) 4716 559</span>
                            </div>
                        </div>

                        <div className="Contact__card">
                            <FontAwesomeIcon className="Contact__icon" icon={faMapMarkedAlt} />
                            <div className="Contact__card__content">
                                <h3>Location</h3>
                                <span>Ivano-Frankivsk</span>
                            </div>
                        </div>
                    </Fade>

                </div>
            </div>
        </div>
    )
}

export default Contact