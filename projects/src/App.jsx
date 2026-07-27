import React, { useState } from 'react'
import Todo from './components/todo/Todo'
import Stopwatch from './components/stopwatch/Stopwatch'
import Counter from './components/counter/Counter'
import CurrencyConverter from './components/currency_convertor/CurrencyConvertor'
import PropDrilling from './components/prop_drilling/PropDrilling'
import ContextAPI from './components/context_api/ContextAPI'

const comps = {
    "Counter": <Counter />,
    "Stopwatch": <Stopwatch />,
    "Todo": <Todo />,
    "Currency Converter": <CurrencyConverter />,
    "Prop Drilling": <PropDrilling />,
    "Context API": <ContextAPI />,
}

const App = () => {
    const [tab, setTab] = useState("Counter");

    return (
        <main className='w-full h-screen'>
            <nav className='w-full flex justify-around py-4 mb-24 flex-wrap gap-y-2'>
                {Object.keys(comps).map((name, ind) => (
                    <button className='bg-yellow-400 border-yellow-900 btn' onClick={() => setTab(name)} key={ind}>{name}</button>
                ))}
            </nav>
            <div className='flex justify-center items-center'>
                {comps[tab]}
            </div>
        </main>
    )
}


export default App