import React, { useContext } from 'react'
import './Education.css'
import Fade from 'react-reveal/Fade';
import ThemeContext from '../../Context/ThemeContext'

const Education = () => {

    const themes = useContext(ThemeContext)

    return (

        <div className="Education" style={themes}>
            <div className="Education__wrapper">
                <Fade top cascade>
                    <h1>
                        Education & Experiences
                    </h1>
                </Fade>
                <Fade top>
                    <div className="Education__time-line">

                        <div className="Education__block">
                            <h4>2016-2020</h4>
                            <h3>Ivano-Frankivsk National Technical University of Oil and Gas</h3>
                            <p>From 2016 of September to 2020 of June I used to study in IFNTUNG. My speciality was Automation and Computer-Integrated Technology.</p>
                        </div>

                        <div className="Education__block">
                            <h4>2019-2020</h4>
                            <h3>IT CLUSTER ACADEMY</h3>
                            <p>From 2019 of September to 2020 of February I used to join the IT Cluster Academy. Three months of practicing in Front-end Web Development gave me a lot of IT skills such as HTML, CSS, JavaScript and practices with students and the projects expecially when my team and I created an online-store.</p>
                        </div>

                        <div className="Education__block">
                            <h4>2020-2020</h4>
                            <h3>Bachelor's Thesis Project</h3>
                            <p>From 2020 of March to 2020 of June i used to create my bachelor's thesis project using React.JS. It was an online-store which created using React.js and Node.js. In one hand It gave me a lot of practicing in front end especially using react.js and in the other hand some practice in back end code (server part).</p>
                        </div>

                        <div className="Education__block">
                            <h4>2020-Now</h4>
                            <h3>Portfolio Page</h3>
                            <p></p>
                        </div>

                    </div>
                </Fade>
            </div>
        </div>

    )
}

export default Education