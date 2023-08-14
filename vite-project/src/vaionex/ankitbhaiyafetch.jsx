import { useEffect, useState } from "react";

const Fetchmyapi = () => {
 const [product,setProduct] = useState([]);
 const [search , setSearch] = useState("");

 useEffect(()=>{
    fetch("https://fakestoreapi.com/products").then((response)=>response.json()).then((data)=> setProduct(data))
    console.log(product)
 },[])
 return(
    <>
    <div>
        <input type="text" placeholder="Search item here"
        onChange={(e)=>setSearch(e.target.value)}
        value = {search} />
    </div>
    <div>
    {product.filter((item) => {
        
        if(search === "") return item ;
        if (item.title.toLowerCase().includes(search.toLowerCase())) {
            return item;
            
            
        }
        console.log(search);
    }).map((item) => { return <p>{item.title}</p>}) }
    </div>
    
    </>
)


}
export default Fetchmyapi;
