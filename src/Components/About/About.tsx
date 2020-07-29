import React, { useContext } from 'react'
import * as me from './images/me.jpg'
import './About.css'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import ThemeContext from '../../Context/ThemeContext'

const About = () => {

    const themes = useContext(ThemeContext)

    return (

        <div id="About" style={themes} >
            <div className="About__wrapper">
                <Fade top cascade>
                    <h1>About me</h1>
                    <div className="About__content">
                        <img src={me} alt="me" />
                        <div className="About__text">
                            <h2>My name is Demian Vytrykush</h2>
                            <h3>
                                <span>Web Developer</span>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </Fade>
                <div className="Skills">
                    <Bounce left>
                        <div className="Skill">
                            <div className="Skill__info">
                                <span>React</span>
                                <span>75%</span>
                            </div>
                            <div className="skill-bar React">
                            </div>
                        </div>

                        <div className="Skill">
                            <div className="Skill__info">
                                <span>JavaScript</span>
                                <span>70%</span>
                            </div>
                            <div className="skill-bar JavaScript">
                            </div>
                        </div>

                        <div className="Skill">
                            <div className="Skill__info">
                                <span>HTML</span>
                                <span>90%</span>
                            </div>
                            <div className="skill-bar HTML">
                            </div>
                        </div>

                        <div className="Skill">
                            <div className="Skill__info">
                                <span>CSS</span>
                                <span>80%</span>
                            </div>
                            <div className="skill-bar CSS">
                            </div>
                        </div>
                    </Bounce>
                </div>
            </div>
        </div>
    )
}

export default About