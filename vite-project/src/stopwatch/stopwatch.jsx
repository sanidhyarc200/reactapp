import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 20); // Adjust the interval duration here (in milliseconds)
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const generateRandomSize = () => {
    return Math.floor(Math.random() * 40) + 10;
  };

  const generateRandomColor = () => {
    const colors = ['#FF4C4C', '#FFB84C', '#FFFF4C', '#4CFF4C', '#4CFFFF', '#4C4CFF', '#B84CFF'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const generateRandomPosition = () => {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    const position = {
      x: Math.random() * containerWidth,
      y: Math.random() * containerHeight
    };
    return position;
  };

  const renderDroplets = () => {
    const droplets = [];
    const numDroplets = 30;

    for (let i = 0; i < numDroplets; i++) {
      const size = generateRandomSize();
      const color = generateRandomColor();
      const position = generateRandomPosition();

      droplets.push(
        <div
          key={i}
          className="droplet"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            top: `${position.y}px`,
            left: `${position.x}px`
          }}
        />
      );
    }

    return droplets;
  };

  return (
    <div className="stopwatch-container">
      <div className="water-droplets">
        {renderDroplets()}
      </div>
      <h1 className="stopwatch-time">{formatTime(time)}</h1>
      <button className="stopwatch-button" onClick={startStopwatch}>Start</button>
      <button className="stopwatch-button" onClick={stopStopwatch}>Stop</button>
      <button className="stopwatch-button" onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default Stopwatch;
