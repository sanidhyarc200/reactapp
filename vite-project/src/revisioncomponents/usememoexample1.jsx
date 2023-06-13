

// const Usememoexample1 = () => {
//     const [count, setCount] = useState(0)
//   return (
//     <>
//     <div>{count}</div>
//     <button onClick={() => setCount(count + 1)}>Increment</button>
    
//     </>
   
//   )
// }

// export default 
import { useMemo, useState } from "react";

const FuncComp11 = () => {
  const [userName, setUserName] = useState("");

  // Re-Calculated once only
  const counter = useMemo(
    () => {
      let counter = 0;
      for (let item = 0; item < 100; item++) {
        counter = counter + item;
        
      }
      return counter;
      
    },
   
  );

  return (
    <div>
      <p>Counter: {counter}</p>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>
  );
};

export default FuncComp11;
// import { useState } from "react";

// const FuncComp = () => {
//   const [userName, setUserName] = useState("");

//   // Re-Calculated everytime on re-render
//   let counter = 0;
//   for (let item = 0; item < 100; item++) {
//     counter = counter + item;
//     console.log(counter)
//   }
//   return (
//     <div>
//       <p>Counter: {counter}</p>
//       <input
//         type="text"
//         value={userName}
//         onChange={(e) => setUserName(e.target.value)}
//       />
//     </div>
//   );
// };

// export default FuncComp;