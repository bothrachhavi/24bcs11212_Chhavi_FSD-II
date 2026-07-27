import React, { useState } from 'react'

const PropDrilling = () => {
    const [theme, setTheme] = useState("light");

    return (
        <main className='container'>
            <div className='box'>
                <h2 className='heading'>Prop Drilling Example</h2>
                <A theme={theme} setTheme={setTheme} />
                <p className='card'>There are multiple components by which the theme and setTheme props<br></br> are going through but only the last component is utilising the props<br></br> giving rise to prop drilling.</p>
            </div>
        </main>
    )
}

const A = ({theme, setTheme}) => {
    return (
        <B theme={theme} setTheme={setTheme} />
    )
}

const B = ({theme, setTheme}) => {
    return (
        <C theme={theme} setTheme={setTheme} />
    )
}

const C = ({theme, setTheme}) => {
    const changeTheme = () => {
        setTheme(theme == "light" ? "dark" : "light");
    }

    return (
        <button onClick={() => changeTheme()} className={`btn ${theme=="light" ? "bg-blue-500 border-blue-900 text-black" : "bg-black border-black text-white"}`}>Toggle Theme</button>
    )
}
export default PropDrilling