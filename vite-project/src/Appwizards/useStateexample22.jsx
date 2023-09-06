import React, { useEffect, useState } from 'react'


const UseStateexample22 = () => {

  const[ data , setData] = useState([]);
    
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/todos").then((Response) => Response.json()).then( (data)=> setData(data))
    },[])
    
  return (
    <>
    {data.map((item)=> 
    <ul>
      <li>
      {item.title} 

      </li>
      <li>
      {item.id}
      </li>
    </ul>
 
     )}
    
       <div>useStateexample22</div>
    </>

 
  )
}

export default UseStateexample22;

