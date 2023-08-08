import React, { useState, useCallback } from 'react';

function CounterD() {
  const [count, setCount] = useState(0);

//   const increment = useCallback(() => {

//     setCount(count + 1);
//     console.log("rerender")
//   }, [count]);
    const increment = () =>{
            setCount(count +1)
            console.log("rerender");
    }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default CounterD