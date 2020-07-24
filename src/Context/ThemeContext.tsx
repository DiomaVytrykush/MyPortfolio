import React from 'react'

export const themes = {
    dark: {
        color: 'white',
        background: 'black',
    }
}

const ThemeContext = React.createContext(themes.dark)

export default ThemeContext