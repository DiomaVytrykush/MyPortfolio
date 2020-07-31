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
                            <p>	Hello, let me introduce myself. My full name is Demian Vytrykush, im 21 years old. I was born in Khodoriv, but now I live in Ivano-Frankivsk. This year I finished the Ivano-Frankivsk National Technical University with bachelor's degree. My speciality was automatization and computer science.
                            As for my hobbies, I prefer playing outside
                            games such as basketball
                            or table tennis but most of
                            my time i spend with the
                            computer especially
                            with programming.</p>
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