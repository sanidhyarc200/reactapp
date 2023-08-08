
import React, { useEffect, useState } from 'react'

const Firstinterviewtest = () => {

    const[data ,setData] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then((data)=> setData(data))
        console.log(data)
    },[])


  return (
   <>




   <div>

   

        {data.filter((item)=>{if(item.id > 6) return item.id ; }).map((item) =>{ return <p>{item.id}</p>}) }
    
  
    
   </div>
   </>
  )
}

export default Firstinterviewtest;


// // import React, { useState } from "react";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

// const App = () => {
//   const [list, setList] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]);

//   return (
//     <DragDropContext>
//       <ul>
//         {list.map((item, index) => (
//           <Draggable key={index} draggableId={index}>
//             {(provided) => (
//               <li
//                 {...provided.props}
//                 style={{
//                   border: "1px solid black",
//                   padding: "10px",
//                 }}
//               >
//                 {item}
//               </li>
//             )}
//           </Draggable>
//         ))}
//       </ul>
//       <Droppable droppableId="list">
//         {(provided) => (
//           <div {...provided.props}>
//             <h3>Drop here</h3>
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default App;



