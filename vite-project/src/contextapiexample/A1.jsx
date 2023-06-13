import { useContext } from "react";
import { MyName } from "./parent";


const Child2 = ()=>{
const name = useContext(MyName)   
    return(
        <>
        <p>my name is {name}</p>
        </>
    )
}
export default Child2;