import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const ContextAPI = () => {
    const {theme} = useTheme();

    return (
        <main className='container'>
            <div className='box'>
                <h2 className='heading'>Context API Example</h2>
                <ThemeButton />
                <p className={`card ${theme == "light" ? "bg-white text-black" : "bg-black text-white"}`}>Context API is used to resolve the issue of Prop Drilling.<br></br>It is available in React to provide Redux operations</p>
            </div>
        </main>
    )
}

const ThemeButton = () => {
    const {theme, switchTheme} = useTheme();

    return (
        <button onClick={() => switchTheme()} className={`btn ${theme == "light" ? "bg-blue-500 border-blue-900 text-black" : "bg-black border-black text-white"}`}>Toggle Theme</button>
    )
}

export default ContextAPI;