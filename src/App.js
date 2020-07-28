import React, { useState } from 'react'
import './App.css';
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Works from './Components/Works/Works'
import Footer from './Components/Footer/Footer'
import { themes } from './Context/ThemeContext'
import ThemeContext from './Context/ThemeContext'

function App() {

  const [theme, setTheme] = useState(themes.light)

  const handleToggleTheme = () => theme === themes.light
    ? setTheme(themes.dark)
    : setTheme(themes.light)

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <Header handleToggleTheme={handleToggleTheme} />
        <About />
        <Education />
        <Works />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
