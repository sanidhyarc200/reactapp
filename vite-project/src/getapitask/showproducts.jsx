// import { useEffect, useState } from "react";

// import { useEffect, useState } from "react"

// function Myproduct (){
//     const [productList, setProductlist] = useState([]);
//     const [search,setSearch] = useState("")
//     useEffect(()=>{

//         fetch("https://fakestoreapi.com/products").then((data)=>data.json()).then((data)=>setProductlist(data))

//     },[])

//     return(
//         <>
//         <div>
//                 <input type="text" placeholder="search products here"
//                 onChange={(e)=>setSearch(e.target.value)}
//                 value = {search}/>
                
//                 {/* <button>search</button> */}
//             </div>
//         <div style={{height:"200px", width:"200px"}} >
//             {productList.filter((item)=>{
                
//                         if(search === "") return item ;
//                         if (item.title.toLowerCase().includes(search.toLowerCase())) {
//                             return item;
                            
//                         }

                    
                
//             }).map((item,i)=>{return <p key={i}>{item.id}{item.title}</p> } )}
//             {/* {productList.map((item)=><p>{item.id}</p> )} */}
            

//             <p>i am the product</p>
//         </div>
//         </>
//     )
// }
// export default Myproduct;

// const Myproduct = () =>{

//     const[productlist,setProductlist] = useState([])
//     const[search,setSearch] = useState("")

//     useEffect(()=>{
//         fetch("https://fakestoreapi.com/products").then((data)=>data.json()).then((data)=>setProductlist(data))
//     },[])

//     return(
//         <>
//         <div>
//             <input type="text" name="" id="" placeholder="searchiteams" 
//             onChange={()=>setSearch(e.target.value)}
//             value = {search}/>

//         </div>


//         <div>

//         </div>
//         </>
//     )
// }
import { useState, useCallback } from "react";

const FuncCompX = () => {
  const [userName, setUserName] = useState("");

  // The entire function will be Calculated once only
  const _handleLoadDetails = useCallback((params) => {
    // body code
  }, []);

  return (
    <div>
      <p>userName: {userName}</p>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>
  );
};

export default FuncCompX;