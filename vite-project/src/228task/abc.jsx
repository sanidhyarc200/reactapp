import { useState } from "react";

function Ab() {

    const [count,setCount] = useState(0)
    return(
        <div>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
        <p>{count}</p>
        </div>
    )
}
export default Ab;