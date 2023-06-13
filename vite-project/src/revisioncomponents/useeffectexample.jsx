import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'

const Useeffectexample1 = () => {
    const [list,setList] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos").then((data)=>data.json()).then((data)=>setList(data))
    },[])
  return (
    <div>
        <div style={{height:"40px", width:"40px", display:"flex",alignItems:"center"}}>
            {list.map((item) => {return <p>{item.title}</p>})}
        </div>
    
    </div>


  )
}

export default Useeffectexample1