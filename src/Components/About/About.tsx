import React, { useContext } from "react";
import * as me from "./images/me.jpg";
import "./About.css";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import ThemeContext from "../../Context/ThemeContext";

const About = () => {
  const themes = useContext(ThemeContext);

  const skillInfo = (name: string, procent: string) => {
    return (
      <div className="Skill">
        <div className="Skill__info">
          <span>{name}</span>
          <span>{procent}</span>
        </div>
        <div className={`skill-bar ${name}`}></div>
      </div>
    );
  };

  return (
    <div id="About" style={themes}>
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
              <p>
                Hello, let me introduce myself. My full name is Demian
                Vytrykush, im 22 years old. I was born in Khodoriv, but now I
                live in Ivano-Frankivsk. This year I finished the
                Ivano-Frankivsk National Technical University with bachelor's
                degree. My speciality was automatization and computer science.
                As for my hobbies, I prefer playing outside games such as
                basketball or table tennis but most of my time i spend with the
                computer especially with programming.
              </p>
            </div>
          </div>
        </Fade>
        <div className="Skills">
          <Bounce left>
            {skillInfo("React", "80%")}
            {skillInfo("React_Native", "65%")}
            {skillInfo("JavaScript", "70%")}
            {skillInfo("HTML", "90%")}
            {skillInfo("CSS", "75%")}
          </Bounce>
        </div>
      </div>
    </div>
  );
};

export default About;
