import { useCallback } from "react";
import { useState } from "react"
import ChildComp from "./EX1Child-comp";


const Day11Usecallback = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const updateCounter1 = useCallback(() => {
        setCounter1((prevState) => prevState + 1);
    }, []);
    
    const updateCounter2 = useCallback(() => {
        setCounter2((prevState) => prevState + 1);

    }, []);
    console.log("parent Re-render");
    return(
        <>
        <p>Counter1: {counter1}</p>
        <p>Counter2: {counter2}</p>
        <ChildComp counter={counter1} onClick={updateCounter1} />
        <button onClick={updateCounter2}>Increment countr 2</button>
        </>
    )
}

export default Day11Usecallback;