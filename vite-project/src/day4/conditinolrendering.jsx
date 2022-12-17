import { useState } from "react"

const Conditions = () => {
    const [counter, setCounter] = useState(0);
    return(
        <div>
            <h1>{counter}</h1>
            <p>{counter % 2 === 0 ? "its even" : "its odd"}</p>
            <button onClick = {() => setCounter(counter + 1)}>Increment</button>
        </div>
    );
};
export default Conditions