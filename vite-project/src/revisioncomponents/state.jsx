import { useState } from "react";

const Stateexample = () =>{

    const[name,setName] = useState("")
    const[error,setError] = useState(true)

    function iserror (){
        setError(false)
        console.log("i am error")
        
    }

        
    

    
    return(
        <>
        <input type="text" placeholder="writename" value={name} onChange={(e)=>setName(e.target.value)}/>
        {error?"":<h1>{name}</h1>}
               <div>
            <button onClick={iserror}>Show Name</button>
        </div>
        </>
    )
}
export default Stateexample;