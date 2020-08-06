import React, { useContext } from 'react'
import './Works.css'
import * as Radostinki from './images/Radostinki.png'
import * as Print from './images/Print.png'
import * as Parallax from './images/Parallax.png'
import Fade from 'react-reveal/Fade'
import ThemeContext from '../../Context/ThemeContext'

const Works = () => {

    const themes = useContext(ThemeContext)

    return (
        <div id="Works" style={themes}>
            <div className="Works__wrapper">
                <Fade top cascade>
                    <h1>Works</h1>
                </Fade>

                <div className="Works__posts">
                    <Fade top>

                        <div className="Works__post">
                            <a href="https://tranquil-sands-29987.herokuapp.com/index" target="_blank" rel="noopener noreferrer"><img src={Radostinki} alt="" className="Works__post__img" /></a>
                            <div className="Works__post__content">
                                <h3>Online-store</h3>
                                <h4>JavaScript & Node.js</h4>
                                <span className="Works__date">September 29, 2019</span>
                            </div>
                        </div>

                        <div className="Works__post">
                            <a href="https://diomavytrykush.github.io/Parallax/" target="_blank"><img src={Parallax} alt="" className="Works__post__img" /></a>
                            <div className="Works__post__content">
                                <h3>Parallax</h3>
                                <h4>React.js</h4>
                                <span className="Works__date">August 6, 2020</span>
                            </div>
                        </div>

                        <div className="Works__post">
                            <a href="https://printstudio.herokuapp.com/shop" target="_blank" rel="noopener noreferrer"><img src={Print} alt="" className="Works__post__img" /></a>
                            <div className="Works__post__content">
                                <h3>Online-store</h3>
                                <h4>React.js & Node.js</h4>
                                <span className="Works__date">June 7, 2020</span>
                            </div>
                        </div>

                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Works