import React from 'react'
import useCounter from '../../hooks/useCounter'

const Counter = () => {
  const {count, increment, decrement, reset} = useCounter(0);
  return (
    <main className='container'>
      <div className='box'>
        <h2 className='heading'>Counter</h2>
        <p className='card'>{count}</p>
        <div className='flex gap-2'>
          <button className='bg-green-500 border-green-900 btn px-4' onClick={() => increment()}>+</button>
          <button className='bg-green-500 border-green-900 btn px-4' onClick={() => decrement()}>-</button>
          <button className='bg-green-500 border-green-900 btn' onClick={() => reset()}>Reset</button>
        </div>
      </div>
    </main>
  )
}

export default Counter