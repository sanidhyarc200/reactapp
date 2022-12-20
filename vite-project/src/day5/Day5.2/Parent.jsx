import ChildD from "./childD"
const Parentfc = (props) =>{
    return(
        <div>
        <h1>my name is {props.name}</h1>
        <ChildD name = "sanidhya"></ChildD>
        </div>
    )
}
export default Parentfc;