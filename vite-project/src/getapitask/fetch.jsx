

import { useEffect, useState } from "react"

function Myproduct (){
    const [productList, setProductlist] = useState([]);
    const [search,setSearch] = useState("")
    useEffect(()=>{

        fetch("https://fakestoreapi.com/products").then((data)=>data.json()).then((data)=>setProductlist(data))

    },[])

    return(
        <>
        <div>
                <input type="text" placeholder="search products here"
                onChange={(e)=>setSearch(e.target.value)}
                value = {search}/>
                
               
            </div>
        <div style={{height:"200px", width:"200px"}} >
            {productList.filter((item)=>{
                
                        if(search === "") return item ;
                        if (item.title.toLowerCase().includes(search.toLowerCase())) {
                            return item;
                            
                        }

                    
                
            }).map((item,i)=>{return <p key={i}>{item.id}{item.title}</p> } )}
          

            <p>i am the product</p>
        </div>
        </>
    )
}
export default Myproduct;