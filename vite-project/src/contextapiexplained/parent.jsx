import { createContext, useState } from "react";
import Child from "./a";
export const userName =  createContext("")
const UserNameProvider = userName.Provider

const Parent = () =>{

    const [name , setName] = useState("")
    

   
    return(
        <>
        <UserNameProvider value={name}>
            <input type="text" placeholder="name" value={name}
            onChange={(e)=>setName(e.target.value)} />
            <h1>i am main</h1>


            <Child/>
        </UserNameProvider>


        </>
    )
}
export default Parent;