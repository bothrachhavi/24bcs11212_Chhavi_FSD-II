import React, { useEffect, useRef, useState } from 'react'

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const startTimeRef = useRef(0);

  const formatTime = (ms) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = ms % 1000;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
  }

  useEffect(() => {
    if (!isActive) return;

    startTimeRef.current = Date.now() - time;

    const interval = setInterval(() => {
      setTime(Date.now() - startTimeRef.current);
    }, 10);

    return () => clearInterval(interval);
  }, [isActive])

  const start = () => setIsActive(true);
  const stop = () => setIsActive(false);
  const reset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <main className='container'>
      <div className='box'>
        <h2 className='heading'>Stopwatch</h2>
        <p className='card'>{formatTime(time)}</p>
        <div className='flex gap-2'>
          {!isActive ? (
            <button className='bg-green-500 border-green-900 btn' onClick={start}>Start</button>
          ) : (
            <button className='bg-green-500 border-green-900 btn' onClick={stop}>Stop</button>
          )}
          <button className='bg-green-500 border-green-900 btn' onClick={reset}>Reset</button>
        </div>
      </div>
    </main>
  )
}

export default Stopwatch