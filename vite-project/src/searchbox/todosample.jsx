import React, { useState } from 'react';
import { v4 } from 'uuid';

const Todosample = () => {
    const [todo,setTodo] = useState([]);
    const [todoTitle,setTodoTitle] = useState("");

    const onhandletodo = () =>{

        setTodo((previousState)=>[...previousState ,{id : v4(),title:todoTitle}])

        setTodoTitle("");
    }
    const onDeleteTodo = (id) => {
        setTodo((previousState)=>{
            return previousState.filter((item)=>item.id !== id)
        })
    }

  return (
    <>
    <div>
        <input type="text" placeholder='todo'
        value={todoTitle}
        onChange={(e)=>setTodoTitle(e.target.value)}/>
        <button onClick={onhandletodo}>Addtodo</button>

        
    </div>

    <div>
    { todo.map((item)=>{
            return(
                <ul>
                <li key={item.id}>{item.title}</li>
                <button onClick={()=>{onDeleteTodo(item.id)}}>deleteTodo</button>
                </ul>
               
            )
        })}
    </div>
  
  </>
  )
  }

export default Todosample;