import React, { useState } from 'react'
import useCountDown from 'react-countdown-hook'
export default function StopWatch() {
  const INITIAL_TIME = 5000;
  const INTERVAL = 1000;
  const [timeLeft, { start, reset }] = useCountDown(INITIAL_TIME, INTERVAL)
  const [initialTime, setInitialTime] = useState(5);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  const startTimer = () => {
    start(initialTime * 60000);
    setIsTimeRunning(true);
  }

  const resetTimer = () => {
    reset();
    setIsTimeRunning(false);
  }

  const showTime = (duration) => {
    let
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds
  }

  return (
    <main>
      <div className="card">
        <h1>Ustaw minutnik</h1>
        {/* <input className="input-words" type="text" placeholder="wprowadź zakazane słowa..." /> */}
        <label>
          <input className="input-timer" type="number" onChange={(e) => setInitialTime(e.currentTarget.value)} value={initialTime} />min
        </label>

        {!isTimeRunning ? (
          <>
            <span className="time">{`00:00:00`}</span>
            <button onClick={startTimer}>Start</button>
          </>
        )
          : (
            <>
              <span className="time">{showTime(timeLeft)}</span>
              <button onClick={resetTimer}>Reset</button>
            </>
          )}
      </div>
    </main >
  )
}
