import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const switchTheme = () => {
        setTheme(theme == "light" ? "dark" : "light");
    }

    const value = {
        theme,
        setTheme,
        switchTheme,
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);