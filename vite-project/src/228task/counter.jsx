import { useState } from "react"

const CounterFc = () =>{
    const [counter,setCounter] = useState(0)
return(
    <div>
        <p>counter:{counter}</p>
        <button onClick={()=>{setCounter (counter+1)}}>incremnent</button>
    </div>
)

}
export default CounterFc; 