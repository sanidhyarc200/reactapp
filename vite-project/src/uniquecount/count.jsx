import React, { useState, useEffect } from 'react';

function IncrementButtons() {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [isIncrementing, setIsIncrementing] = useState(true);

  useEffect(() => {
    if (isCounting) {
      const timeout = setTimeout(() => {
        if (isIncrementing) {
          if (count < 10) {
            setCount(count + 1);
          } else {
            setIsIncrementing(false);
          }
        } else {
          if (count > 1) {
            setCount(count - 1);
          } else {
            setIsIncrementing(true);
          }
        }
      }, 500); 

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [count, isCounting, isIncrementing]);

  const handleStart = () => {
    setIsCounting(!isCounting);
  };

  return (
    <div>
      <div>Current Count: {count}</div>
      <button onClick={handleStart}>{isCounting ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export default IncrementButtons;
