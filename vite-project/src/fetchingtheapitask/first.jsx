import React, { useEffect, useState } from 'react'

const FetchMyid = () => {
    const[products , setProducts] = useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/").then(response => response.json()).then(products => setProducts(products));
   
  },[])
  
  
  
    return (
    <>
    </>
  )
}

export default FetchMyid;