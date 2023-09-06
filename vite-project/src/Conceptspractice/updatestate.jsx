import { useState } from "react";

const CountUpdateof2 = () => {
    const [count , setCount] = useState(0);


    
    const setmycount = () =>{
                setCount((prevstate)=>prevstate +1 );
                setCount((prevstate)=>prevstate +1 );
    }
    return(
        <>
        <p>MY COUNT IS : {count}</p>
        <button onClick={setmycount()}> Increment</button>
        </>
    )

}
 export default CountUpdateof2;