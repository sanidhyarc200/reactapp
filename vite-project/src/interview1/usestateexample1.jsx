import { useState } from "react";

const Findcount = () =>{

    const [count, setCount] = useState(0)
    return(
        <>
        {count}
        <button onClick={()=>setCount(count + 2)}>Increment</button>
        <button onClick={()=>setCount(count - 2)}>Decrement</button>
        </>
    )
}
export default Findcount;