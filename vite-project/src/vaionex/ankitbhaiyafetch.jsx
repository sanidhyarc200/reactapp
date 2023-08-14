import React, { useEffect, useState, useMemo } from "react";

const Fetchmyapi = () => {
 const [product, setProduct] = useState([]);
 const [search, setSearch] = useState("");

 useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProduct(data))
 }, []);

 const filteredProducts = useMemo(() => {
    if (search === "") return product;
    
    return product.filter((item) => 
        item.title.toLowerCase().includes(search.toLowerCase())
    );
 }, [product, search]);

 return (
    <>
    <div>
        <input
            type="text"
            placeholder="Search item here"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
        />
    </div>
    <div>
        {filteredProducts.map((item) => (
            <p key={item.id}>{item.title}</p>
        ))}
    </div>
    </>
 )
}

export default Fetchmyapi;