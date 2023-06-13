import { createContext, useState } from "react";
import Child2 from "./A1";

export const MyName = createContext("")
const MyNameProvider = MyName.Provider

const Contextexample = () => {


    const [name,setName]= useState("")


return(
    <div>

    
    <MyNameProvider value={name}>
    <input type="text" placeholder="writename " value={name} onChange={(e)=>setName(e.target.value)}  />
    <Child2/>
    
    </MyNameProvider>
    </div>
)
}
export default Contextexample;