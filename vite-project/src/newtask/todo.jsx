import { useState } from "react";

function Todo (){
    const [todo,setTodo] = useState([])

    const onhandletodo = () =>{
        

    }

    return(
    <>
    <div>
        <input type="text" placeholder="write your task"
         />
        <button onClick={onhandletodo}>AddTodo</button>
    </div>
        <div>
            <ul>
                <li>

                </li>
            </ul>
        </div>
    </>
    )
}
export default Todo;
