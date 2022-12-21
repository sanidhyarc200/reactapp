import ChildC from "./childC";
const ChildD = (props) =>{
    return(
        <>
        <h1>ChildD{props.hello}</h1>
        <button onClick={()=>props.hello("10")}>button</button>
        </>
    )
}
export default ChildD;