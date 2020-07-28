import React from 'react'

export const themes = {
    dark: {
        color: 'white',
        background: 'rgb(46, 45, 45)',
    }
}

const ThemeContext = React.createContext(themes.dark)

export default ThemeContext