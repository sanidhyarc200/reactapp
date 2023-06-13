import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'

const Useeffectexample1 = () => {
    const [list,setList] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos").then((data)=>data.json()).then((data)=>setList(data))
    },[])
  return (
    <div>
        <div>
            {list.map((item) => {return <p>{item.id}{item.title}</p>})}
        </div>
    <div>Useeffectexample1</div>
    </div>


  )
}

export default Useeffectexample1