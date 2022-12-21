import ChildD from "./childD"
const Parentfc = (props) =>{
    const hello = (a) =>{
        console.log(a);
    }
    return(
        <div>
        <h1>my name is {props.name}</h1>
        <ChildD name = "sanidhya"></ChildD>
        <childD handler = {hello}/>
        </div>
    )
}
export default Parentfc;